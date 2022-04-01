<template>
  <div class = "container">
    <div>
      <button class="btn btn-link">
        <router-link to="/" class="nav-link">Regresar</router-link>
      </button>
      <router-link class="btn btn-outline-primary" to="/suppliers/add">Nuevo proveedor</router-link>
    </div>
    <h1 class = "title text-center"> Lista de proveedores Gapsi</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Razón Social</th>
        <th>Dirección</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="supplier in suppliers">
        <td> {{supplier.id }}</td>
        <td> {{supplier.name }}</td>
        <td> {{supplier.business}}</td>
        <td> {{supplier.direction}}</td>
        <td>
          <img src="@/assets/trash-icon.svg" alt="borrar" @click="remove(supplier.id)"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import SupplierService from '@/services/SupplierService';
export default {
  name: 'Suppliers',
  data(){
    return {
      suppliers: []
    }
  },
  methods: {
    get(){
      SupplierService.getAll()
          .then((response) => {
            this.suppliers = response.data._embedded.supplier;
          }).catch(e => {
            console.log(e);
          });;
    },
    remove(id){
      console.log("Delete supplier: "+ id);
      SupplierService.delete(id)
          .then(response => {
            this.get();
          }).catch(e => {
            console.log(e);
          });
    }
  },
  created() {
    this.get();
  }
}
</script>