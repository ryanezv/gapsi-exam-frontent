<template>
  <Layout>

    <template #header>
      <Header></Header>
    </template>

    <template #content>
      <Content
        :label = "Bienvenido"
        :name = "Richi"
      />
    </template>

    <template #footer>
      <Footer></Footer>
    </template>
  </Layout>

</template>

<script>
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Layout,
    Content,
    Footer,
  },
  data() {
    return {
      label: null,
      name: null
    }
  }
}
</script>