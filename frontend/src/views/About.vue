<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          Works
        </h2>
        <div>
          {{ year.skill }}:{{ year.datail }}
          <br />
          {{ year.comment }}
          <a v-bind="year">
            <v-hover v-slot="{ hover }"
              ><v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                width="250"
                height="250"
              >
                <v-img
                  :src="`${year.src}`"
                  :lazy-src="`${year.src}`"
                  aspect-ratio="1"
                  max-height="150"
                  max-width="250"
                ></v-img>
              </v-card>
            </v-hover>
          </a>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  metaInfo: {
    title: "アバウト",
    titleTemplate: "制作物の一覧ページです",
  },
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2020-03",
        skill: "Glide,GAS",
        datail: "Chitose City × Curry Search",
        comment:
          "ノーコードPWA開発ツールGlideの素振りとして製作した、スマートフォン向けWebアプリです。",
        href: "",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_01.png?alt=media&token=ac9fa1a0-0888-4607-ad6c-e163d55980e8",
      },
      {
        color: "green",
        year: "2020-08",
        skill: "Glide,GAS",
        datail: "Chitose City × TAKEOUT FOOD Search",
        comment:
          "Glide×GASの2本目。Webスクレイピングを定期実行し、毎週月曜日に情報を更新しています。",
        href: "https://probable-point-1725.glideapp.io/",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_02.png?alt=media&token=be680a5a-2a71-4644-a865-3ced3840e564",
      },
      {
        color: "pink",
        year: "2020-08",
        skill: "Unity 1 Week Works",
        datail: "Unity",
        comment:
          "Unity 1 Week Worksのお題「ふえる」で制作した3Dシューティングゲームです。",
        href: "https://unityroom.com/games/a2wvzg5b",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_03.png?alt=media&token=9c1c4d89-c4cd-4b1e-8b88-952757874240",
      },
      {
        color: "amber",
        year: "2020-09",
        skill: "HTML/CSS/GitHubPages",
        datail: "portofolio",
        href: "https://yud0uhu.github.io/unikuri/",
        comment:
          "最初に制作したポートフォリオです。GitHubPageで公開しています。",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_04.png?alt=media&token=f8133c90-8685-41f3-aac9-f93f34cfa5fd",
      },
      {
        color: "amber",
        year: "2020-10",
        skill: "HTML/CSS/firebase",
        datail: "portofolio",
        comment:
          "サークルのポートフォリオハッカソンで制作した2本目のポートフォリオです。",
        href: "https://my-portofolio-4e7d9.web.app/",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_05.png?alt=media&token=9244d993-02e9-4d2e-9a60-c178d7c92cf2",
      },
      {
        color: "amber",
        year: "2020-11",
        skill: "GAS/HTML/CSS/Vue.js/jQuery/firebase",
        datail: "Chitose City × TAKEOUT FOOD Search (WEB版)",
        comment:
          "https://probable-point-1725.glideapp.io/" +
          "のWeb版として共同制作しました。Topページを担当しています。\nGithub:https://github.com/yud0uhu/gas-vue.js",
        href: "https://chitose-fts.web.app/",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_06.png?alt=media&token=6ad2ad11-15d8-4a43-992f-df64c4bf84c4",
      },
      {
        color: "amber",
        year: "2020-11",
        skill: "React.js/firebase",
        datail: "Youtube Clone App",
        comment:
          "React.jsの素振りで制作した某tubeのクローンアプリです(未完成)。",
        href: "https://react-clone-eb00b.web.app/",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_08.png?alt=media&token=00f4c0d8-3ff8-42af-8762-4c95a10d26a2",
      },
      {
        color: "orange",
        year: "2020-12",
        skill: "Vue.js/Vuetify/firebase",
        datail: "portofolio",
        comment: "Vue.jsとVuetifyの素振りで制作した3本目のポートフォリオです。",
        href: "https://yukimi-pino.web.app/",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_07.png?alt=media&token=3a4e8aba-0229-4f2c-90e2-99345519e5a8",
      },
      {
        color: "orange",
        year: "2021-12",
        skill: "GAS",
        datail: "",
        comment:
          "https://chitose-fts.web.app/" +
          "にログイン機能を実装することを目標に制作しました。",
        href:
          "https://script.google.com/macros/s/AKfycbwLU-A0l5788vTO0sAXT1nL5VYWLNZqCt5hfy8vH8EFO_1rSvY/exec",
        src: "https://picsum.photos/500/300?image=0",
      },
      {
        color: "orange",
        year: "2021-01",
        skill: "Java/SpringBoot/heroku",
        datail: "linebot",
        comment: "授業課題の副産物として公開したラインBotです。",
        href: "https://twitter.com/denham95173179/status/1346729422745792513",
        src:
          "https://firebasestorage.googleapis.com/v0/b/yukimi-pino.appspot.com/o/works_09.jpg?alt=media&token=e4160421-10ca-4128-8f67-935680e32635",
      },
      {
        color: "cyan",
        year: "2021-02",
        skill: "Unity",
        datail: "2Dアクションゲーム",
        comment:
          "1週間で開発した2Dアクションゲームの試作品です。現在も共同開発で随時制作中です。",
        href: "https://github.com/yud0uhu/Kari_Title",
        src: "https://github.com/yud0uhu/Kari_Title",
      },
      {
        color: "green",
        year: "2021-03",
        skill: "Python/Flask/heroku",
        datail: "linebot",
        comment:
          "ヤフー主催のハッカソンOpenHackU2020 vol.4に参加し、チームで共同開発を行ったラインBotです。",
        href: "https://github.com/yud0uhu/OpenHackU_vol_4_ID15",
        src: "https://github.com/yud0uhu/OpenHackU_vol_4_ID15",
      },
    ],
  }),
};
</script>
<style scoped>
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
