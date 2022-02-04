<template>

    <div class='creationCompte'>
       
        <h2 class='title is-h2'>Se connecter</h2>
        <form @submit.prevent="validation">
            <div>
                <input class="input is-large is-primary" type='email' required v-model="email" />
            </div>
            <div>
                <input class="input is-large is-primary" type='password' required v-model="password" />
            </div>
            <div>
                <button class="button is-primary">Valider</button>
            </div>
            <p><router-link to="creation-compte">Suivez ce lien pour créer un compte</router-link></p>
        </form>
    </div>
</template>

<script>


export default{
     components:{
       
    },
    data(){
        return {
        
            email : 'amagat@gmail.com',
            password : 'test'
        }
    },
    methods:{
        validation(){
            let donnees = {
                email:this.email,
                password: this.password
            };
            this.$api
            .post('members/signin', donnees)
            .then((response) =>{
                //alert('Votre compte a été créé. Vous pouvez vous connecter.')
                alert('Connexion')
                this.$store.commit('setToken',response.data.token)
                this.$store.commit('setMember',response.data.member)
                this.$router.push('/');
            })
            .catch((error)=>{
                alert(error.response.data.message)
            })
        },
    }
}
</script>

<style>

</style>