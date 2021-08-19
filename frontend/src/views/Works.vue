<template>
  <div>
    <v-container class="pa-4 text-center">
      <v-row>
        <v-col v-for="work in works" :key="work.id">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover,'mx-auto': mx-auto }"
              max-width="344"
            >
              <v-img
                class="white--text align-end"
                height="300px"
                :src="work.productImage.url"
              >
                <v-card-title>{{ work.productTitle }}</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div class="text-h6 font-weight-regular grey--text">
                  {{ work.productData }}
                </div>
                <a v-bind:href="work.productLink"><v-icon>mdi-github</v-icon></a>
                <div class="summary">{{ work.productComposition }}</div>
                
              </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                >
                    More
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                    {{ work.productDatail }}
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  metaInfo: {
    title: "ホーム",
    titleTemplate: "トップページです",
  },
  data: () => ({
    works: [],
    transparent: "rgba(255, 255, 255, 0)",
  }),

  async mounted() {
    // 記事を取得する
    const response = await axios.get(
      "https://flyingcat.microcms.io/api/v1/works",
      {
        headers: { "X-API-KEY": process.env.VUE_APP_X_API_KEY },
      }
    );
    this.works = response.data.contents;
  },
};
</script>
<style scoped>
/* 
コンポーネント単位のスコープ付きCSS
 */
.summary {
  white-space: pre-wrap;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
