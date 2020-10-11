<template>
  <div id="app">
    <ShowCountries />
  </div>
</template>

<script>
import ShowCountries from "./components/ShowCountries";
// import CountryDetails from './components/CountryDetails';

export default {
  name: "App",

  components: {
    ShowCountries,
    // CountryDetails
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
*{
  font-family: 'Nunito Sans', sans-serif;
}
</style>
