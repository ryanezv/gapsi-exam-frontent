<template>
  <div class="row justify-content-md-center">
    <div class="col align-items-center">
      <img src="@/assets/user-icon.svg" class="rounded mx-auto d-block user" alt="Candidato"/>
      <h1 class="text-center">{{ label }} - {{ name }}</h1>
      <div class="d-grid gap-2">
        <router-link to="/suppliers" class="btn btn-primary">Continuar</router-link>
      </div>

    </div>
    <div class="col">
      <img class="gapsi-logo" src="@/assets/logo-gapsi.png" alt="Logo Gapise" />
    </div>
  </div>
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
.user {
  width: 30% !important;
}
.gapsi-logo{
  width: 115% !important;
}
/*
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
  }*/
</style>