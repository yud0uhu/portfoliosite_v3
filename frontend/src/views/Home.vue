<template>
  <div>
    <v-container class="pa-4 text-center">
      <v-row>
        <v-col v-for="article in articles" :key="article.id">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              width="300"
              height="500"
            >
              <v-img
                class="white--text align-end"
                height="300px"
                width="330px"
                :src="article.image.url"
              >
                <v-card-title>{{ article.title }}</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div class="text-h6 font-weight-regular grey--text">
                  {{ article.updata }}
                </div>
                <div class="summary">{{ article.summary }}</div>
              </v-card-text>

              <v-card-actions>
                <!-- 詳細画面で記事を取得できるように、記事のidをパラメーターとして渡す -->
                <router-link
                  :to="{ name: 'article-detail', params: { id: article.id } }"
                >
                  <v-btn color="orange" text>More</v-btn>
                </router-link>
              </v-card-actions>
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

  data: () => ({
    articles: [],
    transparent: "rgba(255, 255, 255, 0)",
  }),

  async mounted() {
    // 記事を取得する
    const response = await axios.get(
      "https://flyingcat.microcms.io/api/v1/articles",
      {
        headers: { "X-API-KEY": process.env.VUE_APP_X_API_KEY },
      }
    );
    this.articles = response.data.contents;
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
