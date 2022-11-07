<template>
  <div>
    <v-img class="mb-4" min-height="500px" :src="image" :cover="true"></v-img>

    <v-row no-gutters class="flex-column justify-center mb-4">
      <v-col cols="12">
        <div class="text-h6 text-center">{{ title }}</div>
      </v-col>
      <v-col cols="12">
        <div class="text-subtitle-2 text-center">$ {{ price }} USD</div>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-btn depressed color="error" @click="goTodetail(id)">
        Details
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  props: {
    data: {},
  },
  data() {
    return {
      'id': this.data.id,
      'image': this.data.image,
      'title': this.data.title,
      'price': this.data.price,
    }
  },
  methods: {
    goTodetail(id) {
      this.$router.push({ name: 'Detail', params: { id: id } })
    }
  }
}
</script>

<style scoped>

</style>
