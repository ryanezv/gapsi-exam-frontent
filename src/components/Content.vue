<template>
  <main>
    <div class="content">
      <img src="@/assets/logo-gapsi.png" alt="Logo Gapise" />
    </div>
    <div class="user">
      <img src="@/assets/user-icon.svg" alt="Candidato"/>
      <h1>{{ label }} - {{ name }}</h1>
    </div>
    <div>
      <button class="outline-primary">
        <router-link to="/suppliers" class="nav-link">Continuar</router-link>
      </button>
    </div>
  </main>
</template>

<script>

import UserService from '../services/UserServices';

export default {
  data() {
    return {
      label: "Bienvenid@",
      name: ""
    }
  },
  methods: {
    get(){
      UserService.get().then((response) => {
        this.name = response.data.name;
      });
    }
  },
  created() {
    this.get();
  }
}

</script>

<style scope>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0 20px;
  }
  .content > img {
    width: 300px;
    height: 300px;
    border-radius: 160px;
    border: 5px solid #1160afa1;
  }
  .user{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .user h1 {
    color: var(--brand-green);
    text-align: center;
  }
  .user > img {
    width: 100px;
  }
</style>