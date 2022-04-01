<template>
<p class="alert alert-secondary"> {{ version }}</p>
</template>

<script>
import { RepositoryFactory } from '@/services/RepositoryFactory'
const AppService = RepositoryFactory.get('app')

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
