<template>
  <!-- Adicionando o componente de card -->
 <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>

export default {
  data() {
    return { };
  },

  methods: {
  }
};
</script>

