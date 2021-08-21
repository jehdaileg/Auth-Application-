<template>
    <div>
        loggedIn

        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>   

        <button @click="signOut">Sign Out</button>     
    </div>
</template>

<script>

import firebase from 'firebase';

import axios from 'axios';

export default {

    created() {
        
        firebase.auth().onAuthStateChanged(user => {

            this.loggedIn = !!user
   /*
            if(user){
                this.loggedIn = true
            }else {
                this.loggedIn = false
            }
    */

        })
    },
    data() {
        return {
            loggedIn : false,

        }
    },

    methods: {
       async signOut(){

           try {

               const data = await firebase.auth().signOut();
               console.log(data);
               this.$router.replace({name : "Loggin"})

           }catch(err){
               console.log(err)
           }
       }
    },
}
</script>