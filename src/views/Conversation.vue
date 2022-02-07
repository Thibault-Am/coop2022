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
              <input type="text" class="input" v-model="mess" />
            </div>
          </div>
          <button class="button is-primary">Ajouter un message</button>
        </form>
      </div>

      <div v-for="message in messages" :key="message.id" class="box" >
           <img :src="avatar(auteur(message.member_id))"/>
        <un-message :message="message" :id_channel="message.id"><br/></un-message>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      messages: [],
      mess: "message " + Math.random(),
      conversation: false,
      membres: [],
      membre:""

    };
  },
  methods: {
    auteur(id){
      let returnValue;
      this.membres.forEach(membre => {
        if (membre.id===id ){
          returnValue=membre
        }
       
      });
      return returnValue;
    },
    posterMessage() {
      
      this.$api.post(`channels/${this.conversation.id}/posts`, {
          member_id: this.$store.state.member.id,
          message: this.mess,
          
        })
        .then(() => {
          alert('Ajout du message')
          this.chargerMessages();
        });
    },
    chargerMessages() {
      
      this.$api.get(`channels/${this.conversation.id}/posts`)
        .then((response)=>{
          this.messages = response.data;
           this.messages.forEach(message => {
              console.log(message.member_id);
              message['auteur'] = this.auteur(message.member_id)
          })
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
