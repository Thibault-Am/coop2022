<template>
    <div>
        <Header />
        <h1 class='title is-h1'>Membres:</h1>
         
        <div class="box" v-for="membre in this.membres" :key="membre.fullname">
           
            <img :src="avatar(membre)"/><br/>
            {{membre.fullname}}<br/>
            <p>Membre depuis :{{membre.created_at}}</p>
            <button type='button' @click="afficherMembre(membre.fullname)" style="display:block;margin-left:auto;margin-right: 0;" class="button is-primary">+ d'infos</button><br/>
            <button  v-if="membre.id!=membre_act" type='button' @click="supprimerMembre(membre.id)" style="display:block;margin-left:auto;margin-right: 0;" class="button is-danger">Supprimer</button>

        </div>
    </div>
</template>

<script>



export default{
     components:{
        

    },
    data(){
         return{
            membres:[],
            membre_act:this.$store.state.member.id
            
         }
    },
    methods : {
        afficherMembre(membre){
            this.$router.push('/membre/'+membre);
        },
        supprimerMembre(id){
              this.$api.delete(`members/${id}`).then(response=>{
                alert("Suppression")
            }).catch(error=>{
                
                alert(error.response.data.message)
            })
        }
    },
    mounted(){
    
            this.$api.get('members').then(response=>{
                this.membres=response.data;
            }).catch(error=>{
                
                alert(error.response.data.message)
            })
      
    }
}
</script>


<style>

</style>
