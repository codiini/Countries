<template>
  <div>
    <header>
      <router-link :to="'/'" class="router-home"><h4>Where in the world</h4></router-link>
      <div class="darkmode" @click="modeToggle">
        <button :class="{ far: true, 'fa-moon': moon, 'fa-sun': sun }"></button>
        <p v-if="moon">Dark Mode</p>
        <p v-else>Light Mode</p>
        <p style="display: none">{{ darkmode }}</p>
      </div>
    </header>
  </div>
</template>

<script>
import { EventBus } from "../main";
export default {
  data() {
    return {
      darkmode: false,
      moon: true,
      sun: false,
    };
  },
  methods: {
    modeToggle() {
      this.darkmode = !this.darkmode;
      this.moon = !this.moon;
      this.sun = !this.sun;
      EventBus.$emit("darkmode", this.darkmode);
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  margin:0 auto;
  /* width:100%; */
  height: 1rem;
  background: var(--bgColor);
  color: var(--text);
  box-shadow: 5.71px 5.71px 22px hsla(208.4, 13.3%, 28%, 0.19),
    -5.71px -5.71px 22px hsla(12, 2.8%, 34.7%, 0.24);
}
.router-home{
  text-decoration: none;
  color:var(--text)
}
.main {
  padding: 1rem 3rem;
}
.darkmode {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.darkmode p {
  margin-left: 10px;
  color: var(--text);
}
button {
  background: none;
  outline: none;
  border: none;
  color: var(--text);
}
</style>