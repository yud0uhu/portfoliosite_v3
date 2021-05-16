<template>
  <div>
    <v-row>
      <v-col v-for="article in articles" :key="article.id">
        <v-card class="mx-auto" width="300" height="330">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="article.image.url"
          >
            <v-card-title>{{ article.title }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",

  data: () => ({
    articles: [],
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
</style>
