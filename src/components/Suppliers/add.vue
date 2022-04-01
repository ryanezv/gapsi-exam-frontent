<template>
  <button class="btn btn-link">
    <router-link to="/suppliers" class="nav-link">Regresar</router-link>
  </button>
  <button class="btn btn-link">
    <router-link to="/" class="nav-link">Home</router-link>
  </button>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="supplier.name"
            name="name"
        />
      </div>
      <div class="form-group">
        <label for="description">Descripcion</label>
        <input
            class="form-control"
            id="description"
            required
            v-model="supplier.description"
            name="description"
        />
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input
            class="form-control"
            id="email"
            required
            v-model="supplier.email"
            name="email"
        />
      </div>
      <div class="form-group">
        <label for="phone">Telefono</label>
        <input
            class="form-control"
            id="phone"
            required
            v-model="supplier.phone"
            name="phone"
        />
      </div>
      <div class="form-group">
        <label for="direction">Direccion</label>
        <input
            class="form-control"
            id="direction"
            required
            v-model="supplier.direction"
            name="direction"
        />
      </div>
      <br/>
      <button @click="save" class="btn btn-success">Guardar</button>
    </div>
    <div v-else>
      <div class="alert alert-success" role="alert">
        {{ message }}
      </div>
      <button class="btn btn-success" @click="newSupplier">Nuevo</button>
    </div>
  </div>
</template>

<script>
  import SupplierService from "@/services/SupplierService";

  export default {
    name: "add",
    data() {
      return {
        supplier: {
          name: "",
          phone: "",
          email: "",
          direction: "",
          description: "",
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
          phone: this.supplier.phone,
          email: this.supplier.email,
          direction: this.supplier.direction,
          description: this.supplier.description,
        };
        SupplierService.create(data)
            .then(response => {
              console.log(response.data);
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