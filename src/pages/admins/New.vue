<template>
  <ProductForm @save-product="addProduct" :model="model" :manufacturers="manufacturers"></ProductForm>
</template>
<script>
import ProductForm from "../../components/products/ProductForm.vue";
export default {
  data() {
    return {
      model: {},
      manufacturers: [{ _id: 1, name: "samsung" }]
    };
  },
  methods: {
    addProduct() {
      console.log("add product");
    }
  },
  components: {
    ProductForm
  }
};
</script>