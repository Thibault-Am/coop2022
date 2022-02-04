<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <router-view/>
  </div>
</template>

<script>


export default{
  name :'App',
  mounted() {
    this.$store.commit("setReady",false);

    this.$api.get('ping').then()

    if (!this.$store.state.token){
      this.seConnecter();
    }else{
      this.$api
        .get(`members/${this.$store.state.member.id}/signedin`)
        .then(this.demarrer)
        .catch(this.seConnecter);
    }
  },
  methods:{
    ready(){
      this.$store.commit("setReady",true);
    },
    demarrer(){
      this.$api.get("members").then((response)=>{
        this.$store.commit("setMembers",response.data);
        this.ready();
      });
    },
    seConnecter(){
      this.$store.commit("setToken",false);
      this.$router.push("/connexion");
      this.ready();
    }
  }
}
</script>


<style lang="scss">

</style>
