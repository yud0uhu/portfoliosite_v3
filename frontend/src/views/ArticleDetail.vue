<template>
  <v-card flat>
    <v-parallax
      width="300"
      src="https://github.com/yud0uhu/vue-blog/blob/master/frontend/src/assets/bg.png?raw=true"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">
            {{ article.title }}
          </h1>
          <h4 class="subheading">
            {{ article.summary }}
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-card class="mx-auto">
      <v-card-text class="text--primary">
        <div class="text-h6 font-weight-regular grey--text">
          {{ article.updata }}
        </div>
        <div>
          {{ article.contents }}
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleDetail",
  metaInfo: {
    title: "記事詳細",
    titleTemplate: "記事詳細ページです",
  },

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
