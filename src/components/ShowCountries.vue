<template>
  <div id="container">
    <header>
      <h2>Where in the world</h2>
      <div class="darkmode">
        <i class="far fa-moon mr-14"></i>
        <p>Dark Mode</p>
      </div>
    </header>
    <div class="main">
      <div class="controls-section">
        <div class="input-section">
          <input
            type="text"
            placeholder="Search for a country"
            v-model="search"
          />
        </div>
        <div class="filters">
          <select name="choice" v-model="region">
            <option disabled value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div class="countries">
        <div
          class="country"
          v-for="(country, index) in countryFilter"
          :key="index"
        >
          <img :src="country.flag" alt="" class="countryflag" />
          <h3>{{ country.name }}</h3>
          <p><strong>Population: </strong>{{ country.population }}</p>
          <p><strong>Region: </strong>{{ country.region }}</p>
          <p><strong>Capital: </strong>{{ country.capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "ShowCountries",
  data() {
    return {
      country: "",
      search: "",
      region: "",
      countriesList: [],
    };
  },
  methods: {
    regionSearch: function () {
      axios
        .get("https://restcountries.eu/rest/v2/region/" + this.region)
        .then((response) => {
          this.countriesList = response.data;
        });
    },
  },
  mounted() {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      this.countriesList = response.data;
    });
  },
  computed: {
    countryFilter: function () {
      return this.countriesList.filter((country) => {
        return country.name.match(this.search);
      });
    },
  },
  watch: {
    region: function () {
      this.regionSearch();
    },
  },
  filter: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
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
  height: 1rem;
  background: #fff;
  background: #ffffff;
  box-shadow: -20px 20px 40px #e6e6e6, 20px -20px 40px #ffffff;
}
.main {
  padding: 1rem 3rem;
}
.darkmode {
  display: flex;
  align-items: center;
  justify-content: center;
}
.controls-section {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.input-section {
  margin-top: 50px;
  width: 30%;
}
.input-section input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 5.71px 5.71px 22px #929496, -5.71px -5.71px 22px #ffffff;
}
.filters select {
  outline: none;
  border: 0.3px solid grey;
  padding: 0.8rem;
}
.countries {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  grid-auto-rows: minmax(100px, auto);
  margin: 70px auto;
}
.country {
  background: #fff;
  height: 400px;
  width:fit-content;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 11px #d1d3d7, -1.5px -1.5px 11px #ffffff;
}
.country h3,
p {
  margin-left: 10px;
}
.countryflag {
  width:270px;
  height:auto;
}
</style>