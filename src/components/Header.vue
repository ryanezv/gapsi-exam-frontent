<template>
  <header>
    <a href="#" @click="reload">
      <img src="@/assets/header-gapsi.png" alt="Grupo de asesores Gapsi"/>
    </a>
    <h1 class="primary">e-Commerce Gapsi</h1>
  </header>
</template>

<script>
export default {
  methods:{
    reload(){
      location.reload();
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #b9b8ff85;
    flex-wrap: wrap;
    height: 120px;
    background: #80808036;
  }

  header a img {
    width: 100px;
    padding: 0px 0px 0px 20px;
  }

</style>