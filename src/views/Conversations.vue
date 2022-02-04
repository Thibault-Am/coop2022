<template>
    <div>
        <Header />
        <h2 class="title is-2">Conversations</h2>
        
        <p @load="afficherConv()">
            <ul id="example-1">
                <li v-for="conv in this.conversation" :key="conv.id">
                    <article class="message is-primary">
                        <div class="message-header">
                            {{ conv.topic}}
                        </div>
                        <div class="message-body">
                            {{ conv.label}}
                        </div>
                        <button @click="afficherUneConversation(conv.id)" class="button is-primary">Afficher</button>
                        <button @click="supprimerUneConversation(conv.id)" class="button is-danger">Supprimer</button>
                        <br/><br/>
                    </article>
                    <br/>
                </li>
            </ul>
        </p>
         <button class="button is-primary" @click="CreerConversation()">Ajouter une conversation</button>
    </div>
</template>

<script>


export default{
     components:{
   

    },
    data(){
        return{
            conversation : []
        }
    },
    methods : {
        CreerConversation(){
           this.$router.push('creer-conversation')
        },
        afficherConv(){
            this.$api.get('channels').then(response=>{
                this.conversation=response

            }).catch(error=>{
                
                alert(error)
            })
        },
        afficherUneConversation(id){
            this.$api.get(`channels/${id}`).then(response=>{
                this.$router.push('/conversation/'+id)

            }).catch(error=>{
                
                alert(error)
            })
        },
        supprimerUneConversation(id){
            this.$api.delete(`channels/${id}`).then(response=>{
               alert('Suppression de la conversation')
            }).catch(error=>{
                
                alert(error)
            })
        }
    },
    mounted(){
        //console.log(this.$store.state.token)
         this.$api
            .get('channels')
            .then((response) =>{
                //alert('Votre compte a été créé. Vous pouvez vous connecter.')
                this.conversation = response.data
               
            })
            .catch((error)=>{
                alert(error.response.data.message)
            })
    }
}
</script>
    
<style>

</style>