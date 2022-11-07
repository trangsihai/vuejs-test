<template>
  <div>
    <div class="hero-section">
      <div class="banner">
        <div class="banner-information">
          <v-row class="flex-column">
            <v-col>
              <h1>Serving you<br />since 1989.</h1>
            </v-col>
            <v-col>
              <p>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-carousel cycle :interval="2000" height="80vh" v-model="model" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(image) in images" :key="image">
          <v-sheet height="100%" tile>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-img height="100%" width="100%" :src="image" :cover="true"></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="products-section">
      <v-row class="flex-row ma-auto" style="width: 100%">
        <v-col lg="4" md="6" sm="12" cols="12" v-for="product in products" :key="product.id">
          <product-card :data="product" />
        </v-col>
        <v-col cols="12" class="text-center" v-show="loadAll">
          <v-btn depressed color="black" @click="loadAllProducts" :loading="loading">
            View all products
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {

  components: {
    ProductCard,
  },
  data: () => {
    const mockData = [{
      'id': 1,
      'image': "https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg",
      'title': "White Tent",
      'price': "200.00",
    },
    {
      'id': 2,
      'image': "https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg",
      'title': "Tin Coffee Tumbler",
      'price': "35.00",
    }, {
      'id': 3,
      'image': "https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg",
      'title': "Blue Canvas Pack",
      'price': "95.99",
    }];
    return ({
      model: 0,
      images: [
        'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      ],
      mockData: mockData,
      products: mockData,
      loading: false,
      loadAll: true
    })
  },
  methods: {
    loadAllProducts() {
      this.loading = true;
      setTimeout(() => {
        for (var i = 0; i < 1; i++) {
          this.products.push({
            'id': 4,
            'image': "https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg",
            'title': "Green Canvas Pack",
            'price': "125.00",
          });
        }
        this.loading = false;
        this.loadAll = false;
      }, 500);
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
}

.hero-section .banner {
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.hero-section .banner .banner-information {
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
}

.hero-section h1 {
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  color: #ffffff;


}

.hero-section p {
  width: 70%;
  font-size: 13px;
  color: #ffffff;
}

.products-section {
  max-width: 1200px;
  margin: 32px auto;
}


@media screen and (min-width: 769px) {
  .hero-section h1 {
    font-size: 62px;
  }

  .hero-section p {
    font-size: 18px;
    width: 50%;
  }
}
</style>
