<template>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <router-link to="/suppliers" class="btn btn-link">Regresar</router-link>
      <router-link to="/" class="btn btn-link">Inicio</router-link>
      <div v-if="!submitted" class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="supplier.name"
            name="name"
            placeholder="Nombre del proveedor">

        <label for="name" class="form-label">Razón social</label>
        <input
            type="text"
            class="form-control"
            id="business"
            required
            v-model="supplier.business"
            name="business"
            placeholder="Razon social">

        <label for="name" class="form-label">Dirección</label>
        <input
            type="text"
            class="form-control"
            id="direction"
            required
            v-model="supplier.direction"
            name="direction"
            placeholder="Dirección">
        <br/>
        <div class="row">
          <button @click="save" class="btn btn-success">Guardar</button>
        </div>

      </div>
      <div v-else>
        <div class="alert alert-success" role="alert">
          {{ message }}
        </div>
        <button class="btn btn-success" @click="newSupplier">Nuevo</button>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
  import { RepositoryFactory } from '@/services/RepositoryFactory'
  const SupplierService = RepositoryFactory.get('suppliers')

  export default {
    name: "add",
    data() {
      return {
        supplier: {
          name: "",
          business: "",
          direction: "",
          published: false
        },
        message: "Proveedor guardado exitosamente",
        submitted: false
      };
    },
    methods: {
      save() {
        let data = {
          name: this.supplier.name,
          business: this.supplier.business,
          direction: this.supplier.direction,
        };
        SupplierService.create(data)
            .then(response => {
              if(response.data.id == null){
                this.message = "El proveedor "+ response.data.name +" ya existe en la Base de Datos";
              } else{
                this.message = "Proveedor guardado exitosamente";
              }
              this.submitted = true;
            }).catch(e => {
              console.log(e);
            });
      },
      newSupplier() {
        this.submitted = false;
        this.supplier = {};
      }
    }
  };
</script>

<style scoped>

</style>
