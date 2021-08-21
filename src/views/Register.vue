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
export default {

    data() {
        return {
          email : "",
          password: "",
          error: ""
        }
    },

    methods: {
        registered(){
           
        }
    },
    
}
</script>

<style scoped>

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