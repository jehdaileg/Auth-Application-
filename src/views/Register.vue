<template>
    <div>

       <div v-if="error" class="error">{{ error.message }}</div>

      <form @submit.prevent="registered">
           Register Section 

          <div class="email">
               <input type="email" placeholder="Enter your email here..." v-model="email">
          </div>

          <div class="password">
              <input type="password" placeholder="Enter your password here..." v-model="password">
          </div>

          <button type="submit">Register</button>

      </form>
        
    </div>
</template>

<script>

import firebase from 'firebase';

import axios from 'axios';

export default {

    data() {
        return {
          email : "",
          password: "",
          error: ""
        }
    },

    methods: {
        async registered(){

            try {

               const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
               
               this.$router.replace({name : "Secret"});

               console.log(user)

            }catch(err){
                console.log(err)
            }

        },
     
}

}
</script>

<style>

.error {
    color: red;
    font-size: 18px;
}

input {
    width: 250px;
    height: 35px;
    font-size: 15px;
    margin: 10px;
}

button {
    width: 130px;
    height: 50px;
    font-size: 100%;
    background-color: lightgreen;
    cursor: pointer;
}

</style>