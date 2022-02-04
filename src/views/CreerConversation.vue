<template>
    <div>
        <Header />
        <form @submit.prevent="CreerConversation">
            <div>
                <label for='sujet'>Sujet</label><br/>
                <input class="input is-large is-primary" type='text' name='sujet' required v-model="channel.topic" />
            </div>
            <div>
                <label for='label'>Label</label><br/>
                <input class="input is-large is-primary" type='text' name='label' required v-model="channel.label" />
            </div>
            
            <div>
                <button class="button is-primary">Ajouter</button>
            </div>
        </form>
    </div>
</template>

<script>



export default{
     components:{


    },
    data(){
        return{
            channel :{
            label:"",
            topic:""
            }
        }
    },
    methods : {
        CreerConversation(){
            console.log('ok')
            this.$api.post('channels',this.channel).then(response=>{
                
                alert('Création de la conversation')
                this.$router.push('/');

            }).catch(error=>{
                
                console.log(error.response.data.message)
            })
        },
    },
}
</script>


<style>

</style>