<template>
    <div>
        <Header />
    </div>
</template>

<script>



export default{
     components:{
      

    },
    data:{
        message:""
    },
    methods : {

    },
    mounted(){
        this.$api.delete('members/signout').then(response=>{
                this.message=response,
                this.$store.commit('setToken',"")
                this.$store.commit('setMember',"")
                this.$router.push('/connexion');
            }).catch(error=>{
                
                alert(error.response.data.message)
            })
    }
}
</script>


<style>

</style>