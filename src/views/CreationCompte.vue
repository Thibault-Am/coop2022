<template>
    <div class='creationCompte'>
 
        <h2 class="title is-h2">Création de compte</h2>
        <form @submit.prevent="validation">
            <div>
                <input class="input is-large is-primary" type='text' required v-model="fullname" />
            </div>
            <div>
                <input class="input is-large is-primary" type='email' required v-model="email" />
            </div>
            <div>
                <input class="input is-large is-primary" type='password' required v-model="password" />
            </div>
            <div>
                <button class="button is-primary">Valider</button>
            <p><router-link to="connexion">Aller à la page de connexion</router-link></p>

            </div>
        </form>
    </div>
</template>

<script>


export default{
     components:{
     

    },
    data(){
        return {
            fullname : 'amagat thibault',
            email : 'amagat@gmail.com',
            password : 'test'
        }
    },
    methods:{
        validation(){
            this.$api.post('members',{
                fullname: this.fullname,
                email:this.email,
                password:this.password
            }).then(response =>{
                alert('Votre compte a été créé. Vous pouvez vous connecter.')
                //console.log(response.data)
                this.$router.push('/connexion');
            }).catch(error=>{
                alert(error.response.data.message)
            })
        },
    }
}
</script>

<style>

</style>