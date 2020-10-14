<template>
  <div id="country-details">
    <div class="back-button">
      <router-link :to="'/'" class="back-router"
        ><i class="fas fa-long-arrow-alt-left"></i>Back</router-link
      >
    </div>
    <div class="main">
      <div class="main_1">
        <div class="flag-container">
          <img :src="country.flag" alt="" class="flag" />
        </div>
        <div class="info_one">
          <h1>{{ country.name }}</h1>
          <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
          <p>
            <strong>Population:</strong> {{ country.population | formatNumber }}
          </p>
          <p><strong>Region:</strong> {{ country.region }}</p>
          <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
          <p><strong>Capital:</strong> {{ country.capital }}</p>
        </div>
        <div class="info_two">
          <p>
            <strong>Top Level Domain:</strong> {{ country.topLevelDomain[0] }}
          </p>
          <p><strong>Currencies:</strong> {{ country.currencies[0].name }}</p>
          <p><strong>Languages:</strong> {{ country.languages[0].name }}</p>
        </div>
      </div>
      <div class="info_three">
        <!-- <div> -->
          <p><strong>Border Countries:</strong></p>
          <div class="border" v-for="(border, index) in borders" :key="index">
            <a :href="'/country/' + border"> {{ border }}</a>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "CountryDetails",
  data() {
    return {
      code: this.$route.params.code,
      country: {},
      borders: [],
      borderName: [],
      countriesList: [],
    };
  },
  created() {
    axios
      .get("https://restcountries.eu/rest/v2/alpha/" + this.code)
      .then((response) => {
        this.country = response.data;
        this.borders = response.data.borders;
      });
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      this.countriesList = response.data;
    });
  },
};
</script>

<style scoped>
#country-details {
  height:100%;
  margin-top: 50px;
  margin-left: 50px;
  padding-bottom:30px;
  background: var(--bgColor);
  color: var(--text);
}
.back-button {
  text-align: center;
  display: block;
  margin-bottom: 50px;
  width: 70px;
  background-color: var(--bgColor);
  padding: 20px;
  box-shadow: 5.71px 5.71px 22px hsla(208.4, 13.3%, 28%, 0.19),
    -5.71px -5.71px 22px hsla(12, 2.8%, 34.7%, 0.24);
}
.back-button i {
  margin-right: 10px;
  color: var(--text);
}
.back-router {
  text-decoration: none;
  color: var(--text);
}
.flag {
  width: 500px;
  height: auto;
}
.main_1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info_one,
.info_two {
  margin: 50px auto;
}
.info_three {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position:relative;
}
.info_three p{
  display: block;
}
.border {
  display: inline-block;
  margin:5px;
  padding: 5px;
  background: var(--bgColor);
  box-shadow: 1.5px 1.5px 11px hsla(208.4, 23.5%, 31.8%, 0.39),
    -1.5px -1.5px 11px rgba(0, 0, 0, 0);
}
.border a {
  text-decoration: none;
  color: var(--text);
}
/* Mobile Styling */
@media screen and (max-width: 900px) {
  .main_1 {
    display: block;
  }
  .flag-container {
    margin: 0 auto;
  }
  .flag {
    width: 250px;
  }
  .info_three{
    display: inline;
    margin:0 auto;
    padding-bottom:20px;
  }
}
</style>