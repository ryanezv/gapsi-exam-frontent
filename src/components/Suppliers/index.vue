<template>
  <div class = "container">
    <div>
      <button class="btn btn-link">
        <router-link to="/" class="nav-link">Regresar</router-link>
      </button>
      <button class="btn btn-outline-primary">
        <router-link to="/suppliers/add">Nuevo proveedor</router-link>
      </button>
    </div>
    <h1 class = "title text-center"> Lista de proveedores Gapsi</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Telephone</th>
        <th>Email</th>
        <th>Direction</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="supplier in suppliers">
        <td> {{supplier.id }}</td>
        <td> {{supplier.name }}</td>
        <td> {{supplier.phone}}</td>
        <td> {{supplier.email}}</td>
        <td> {{supplier.direction}}</td>
        <td> {{supplier.description}}</td>
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
      SupplierService.getAll().then((response) => {
        this.suppliers = response.data._embedded.supplier;
      });
    },
    remove(id){
      console.log("Delete supplier: "+ id);
      SupplierService.delete(id).then(response => {
        this.$router.go();
      })

    }
  },
  created() {
    this.get();
  }
}
</script>