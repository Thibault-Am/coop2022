<template>
    <div v-if="membre">
        <Header />
        <h1 class='title is-h1'>Membre:</h1>
        <img :src="avatar(this.membre)"/>
        <div class="box" >
            Fullname : {{this.membre.fullname}}
        </div>
        <div class="box" >
            E-mail : {{this.membre.email}}
        </div>
        <div class="box" >
            Membre depuis le : {{this.membre.created_at}}
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
            membre:null,
            member:false, 
         }
    },
    methods : {
        afficherMembre(membre){
            this.$router.push('/membre/'+membre)
        }
    },
    mounted(){
     
        this.member = this.$store.getters.getMembre(this.$route.params.idMembre);

        let membre = this.$route.params.membre;
        
        this.$api.get('members').then(response=>{
            this.membres=response.data;
            this.membres.forEach(element => {
                if(element.fullname==membre){
                    this.membre=element;  
                }
            });
        }).catch(error=>{
            
            alert(error.response.data.message)
        })
           
      
    },
    computed:{
       
        created_at(){
            if(this.member){
                let d = new Date(this.member.created_at);
                return(
                    d.toLocaleDateString("fr-FR") + " à " + d.toLocaleTimeString("fr-FR")
                );
            }
        }
    }
}
</script>


<style>

</style>
