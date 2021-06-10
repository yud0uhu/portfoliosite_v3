<template>
  <v-card flat>
    <v-img
      height="400"
      src="https://github.com/yud0uhu/vue-blog/blob/master/frontend/src/assets/bg.png?raw=true"
    ></v-img>
    <v-img :src="article.image.url" style="width: 50%"></v-img>

    <v-card-title>{{ article.title }}</v-card-title>

    <v-card-text>
      <div>{{article.contents]}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleDetail",

  data: () => ({
    article: [],
  }),

  async mounted() {
    // idを指定して特定の記事を取得する
    const response = await axios.get(
      "https://flyingcat.microcms.io/api/v1/articles/" +
        this.$route.params["id"],
      {
        headers: { "X-API-KEY": process.env.VUE_APP_X_API_KEY },
      }
    );
    this.article = response.data;
  },
};
</script>
