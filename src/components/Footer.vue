<template>
<p class="alert alert-secondary"> {{ version }}</p>
</template>

<script>
import AppService from '../services/AppService';

export default {
  data() {
    return {
      version: "",
    }
  },
  methods: {
    get(){
      AppService.getVersionApp().then((response) => {
        this.version = response.data;
      });
    }
  },
  created() {
    this.get();
  }
}
</script>