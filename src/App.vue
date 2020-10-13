<template>
  <div id="app" :class="{ dark: theme, light: !theme }">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { EventBus } from "./main";
import Header from "./components/Header";
export default {
  name: "App",

  components: {
    Header,
  },
  data() {
    return {
      theme: "",
    };
  },
  created() {
    EventBus.$on("darkmode", (changeMode) => {
      this.theme = changeMode;
    });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
* {
  font-family: "Nunito Sans", sans-serif;
}
#app,
html,
body {
  background: var(--bgColor);
  color: var(--text);
}
:root {
  --darkBlue: var(hsl(209, 23%, 22%));
  --veryDarkBlue: var(hsl(207, 26%, 17%));
  --lightText: var(hsl(200, 15%, 8%));
  --darkGrey: var(hsl(0, 0%, 52%));
  --veryLightGrey: var(hsl(0, 0%, 98%));
  --white: var(hsl(0, 0%, 100%));
}
.light {
  --text: hsl(200, 15%, 8%);
  --input: hsl(0, 0%, 52%);
  --bgColor: hsl(0, 0%, 98%);
}
.dark {
  --text: hsl(0, 0%, 100%);
  --input: hsl(209, 23%, 22%);
  --bgColor: hsl(207, 26%, 17%);
}
</style>
