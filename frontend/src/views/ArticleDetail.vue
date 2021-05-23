<template>
  <v-card flat>
    <v-img
      height="400"
      src="https://github.com/yud0uhu/vue-blog/blob/master/frontend/src/assets/bg.png?raw=true"
    ></v-img>
    <!-- <v-img height="400" :src="image.url"></v-img> -->

    <v-card-title>{{ article.title }}</v-card-title>

    <v-card-text>
      <div v-html="sanitizedBody"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";

export default {
  name: "ArticleDetail",

  data: () => ({
    article: {},
  }),

  computed: {
    sanitizedBody() {
      // imgタグのみ使えるようにする
      return sanitizeHtml(this.article.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      });
    },
  },

  async mounted() {
    // idを指定して特定の記事を取得する
    const response = await axios.get(
      "https://flyingcat.microcms.io/api/v1/articles" + this.$route.params.id,
      {
        headers: { "X-API-KEY": process.env.VUE_APP_X_API_KEY },
      }
    );
    this.article = response.data;
  },
};
</script>
