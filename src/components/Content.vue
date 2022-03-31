<template>
  <main>
    <div class="content">
      <img src="@/assets/logo-gapsi.png" alt="Logo Gapise" />
    </div>
    <div class="user">
      <img src="@/assets/user-icon.svg" alt="Candidato"/>
      <h1>{{ label }} - {{ name }}</h1>
      </div>
  </main>
</template>

<script>
export default {
  props:{
    label: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      label: "Bienvenid@",
      name: "Ricado"
    }
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