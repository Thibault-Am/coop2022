<template>
  <div>
    <Header />
    <section class="section">
      <div class="box" v-if="conversation">
        <p class="title is-4">{{ conversation.topic }}</p>
        <p class="subtitle is-6">{{ conversation.label }}</p>
      </div>
      <div class="box">
        <form @submit.prevent="posterMessage">
          <div class="field">
            <div class="control">
              <input type="text" class="input" v-model="message" />
            </div>
          </div>
          <button class="button is-primary">Ajouter un message</button>
        </form>
      </div>
      
      <div class="box" v-for="message in this.messages" :key="message.id">
          <div v-show="auteur(message.member_id)">
            
          </div>
          <img :src="avatar(membre)"/><br/>
          <i ><b>Auteur: </b>{{membre.fullname}}</i><br/>
        
        <b>Message: </b>{{ message.message }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      messages: [],
      message: "message " + Math.random(),
      conversation: false,
      membres: [],
      membre:""

    };
  },
  methods: {
    auteur(id){
      this.membres.forEach(membre => {
        if (id==membre.id){
          this.membre=membre
        }
      });
    },
    posterMessage() {
      
      this.$api
        .post(`channels/${this.conversation.id}/posts`, {
          member_id: this.$store.state.member.id,
          message: this.message,
          
        })
        .then(() => {
          alert('Ajout du message')
          this.chargerMessages();
        });
    },
    chargerMessages() {
      
      this.$api
        .get(`channels/${this.conversation.id}/posts`)
        .then((response) => {
          this.messages = response.data;
        });
        
    },
    /*    idMembre() {
      this.membres.forEach((membre) => {
        if (membre.fullname == this.current_name) {
          this.id_membre_act = membre.id;
          console.log(membre.id);

          this.$api
            .post(`channels/${this.conversation.id}/posts`, {
              member_id: this.id_membre_act,
              message: this.message,
            })
            .then((response) => {
              alert("Votre message a été ajouté.");
              //console.log(response.data)
              this.$router.push("/");
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
        }
      });
    },*/
  },
  mounted() {
    
    let id = this.$route.params.idConversation;

    this.$api.get(`channels/${id}`).then((response) => {
      //alert('Votre compte a été créé. Vous pouvez vous connecter.')
      this.conversation = response.data;
      this.chargerMessages();
    });

    this.$api
      .get(`members`)
      .then((response) => {
        //console.log(response.data);
        this.membres = response.data;
        //console.log(this.membres)
      })
      .catch((error) => {
        alert(error.data.message);
      });
      
  },
};
</script>
    
<style>
</style>