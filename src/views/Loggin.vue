<template>
    <div>

        <div v-if="error" class="error">{{ error.message }}</div>

     <form @submit.prevent="login">

            Loggin Section 

            <div class="email">
                <input type="email" placeholder="Tap your email..." v-model="email">
            </div>

            
            <div class="password">
                <input type="password" placeholder="Tap your password..." v-model="password">
            </div>

            <button type="submit">Sign In</button>

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
       async login(){

           try {
               
               const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)

               console.log(val)

               this.$router.replace({name: "Secret"})

           }catch(err){
               console.log(err)
           }
           
       }
     
}

}
</script>

<style scoped>
.error {
    color: red;
    font-size: 18px;
}

input {
    width: 250px;
    height: 25px;
    font-size: 15px;
    margin: 20px;

}

button {

    background-color: lightblue;
    width: 200px;
    height : 40px;
    font-size: 18px;
    cursor: pointer;
}
    
</style>