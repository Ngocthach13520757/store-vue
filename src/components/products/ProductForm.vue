<template>
  <form @submit.prevent="handleForm">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="model.name"
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('name')}"
              type="text"
              placeholder="Name"
              name="name"
            >
          </div>
          <span class="danger-text" v-show="errors.has('name')">Name is required</span>
        </div>
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input
              v-model="model.price"
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('price')}"
              type="number"
              placeholder="Price"
              name="price"
            >
          </div>
          <span class="text-danger" v-show="errors.has('price')">Price is required</span>
        </div>
        <div class="field">
          <label class="label">Manufacturer</label>
          <div class="control">
            <div
              :class="{'select': true, 'is-danger': errors.has('manufacturer'), 'is-fullwidth':true}"
            >
              <select v-model="model.manufacturers" v-validate="'required'" name="manufacturer">
                <option
                  v-for="manufacturer in manufacturers"
                  :key="manufacturer._id"
                  :value="manufacturer._id"
                  :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
                >{{manufacturer.name}}</option>
              </select>
            </div>
          </div>
          <span v-show="errors.has('manufacturer')" class="text-danger">Manufactuer is required</span>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input
              v-model="model.image"
              v-validate="'required|url'"
              :class="{'input': true, 'is-danger': errors.has('imglink')}"
              type="text"
              placeholder="Image link"
              name="imglink"
            >
          </div>
          <span class="text-danger" v-show="errors.has('imglink')">Image link is required</span>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              v-model="model.description"
              v-validate="'required'"
              :class="{'textarea': true, 'is-danger':errors.has('description')}"
              placeholder="Textarea"
              name="description"
            ></textarea>
          </div>
          <span class="text-danger" v-show="errors.has('description')">Description is required</span>
        </div>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button v-if="isEditing" class="button is-primary is-rounded is-medium">Submit</button>
            <button v-else class="button is-primary is-rounded is-medium">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  props: ["model", "manufacturers", "isEditing"],
  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    }
  }
};
</script>