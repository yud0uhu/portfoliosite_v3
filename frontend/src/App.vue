<template>
  <v-app>
    <v-container>
      <v-app-bar color="#FFFFFF" flat max-height="100" class="mb-5">
        <v-toolbar-title>
          <h1><router-link to="/" class="logo">建設予定地</router-link></h1>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div id="nav">
          <v-tabs>
            <v-tab>
              <router-link to="/"
                ><v-icon>mdi-home</v-icon>Profile</router-link
              ></v-tab
            >
            <v-tab
              ><router-link to="/works"
                ><v-icon>mdi-space-invaders</v-icon>Works</router-link
              ></v-tab
            >

          </v-tabs>
        </div>
      </v-app-bar>

      <router-view />
    </v-container>
  </v-app>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  a {
    color: #2c3e50;
    text-decoration: none;
  }
}

#nav {
  padding: 30px;

  .router-link-exact-active {
    color: #42b983;
  }
}
</style>
