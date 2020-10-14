<template>
  <div id="container">
    <div class="main">
      <div class="controls-section">
        <div class="input-section">
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for a country"
            v-model="search"
          />
        </div>
        <div class="filters">
          <i class="fas fa-caret-down"></i>
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
          <router-link :to="'country/' + country.alpha3Code">
            <img :src="country.flag" alt="" class="countryflag" />

            <h3>{{ country.name }}</h3>
            <p>
              <strong>Population: </strong
              >{{ country.population | formatNumber }}
            </p>
            <p><strong>Region: </strong>{{ country.region }}</p>
            <p><strong>Capital: </strong>{{ country.capital }}</p>
          </router-link>
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
#container {
  padding-bottom: 50px;
  height: 100%;
  background: var(--bgColor);
}
.main {
  min-height: 100vh;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background: var(--bgColor);
}
.controls-section {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.input-section {
  display: flex;
  margin-top: 50px;
  width: 50%;
}
.input-section i {
  position: absolute;
  padding: 20px;
  margin-top: 5px;
  margin-right: 10px;
  color: var(--text);
}
.input-section input {
  width: 100%;
  padding: 1.5rem 3.5rem;
  border: none;
  border-radius: 6px;
  background-color: var(--bgColor);
  color: var(--text);
  box-shadow: 5.71px 5.71px 22px hsla(208.4, 13.3%, 28%, 0.19),
    -5.71px -5.71px 22px hsla(12, 2.8%, 34.7%, 0.24);
}
.filters {
  position: relative;
}
.filters select {
  outline: none;
  border: 0.3px solid grey;
  border-radius: 4px;
  padding: 1rem 2rem;
  appearance: none;
  background: var(--bgColor);
  color: var(--text);
}
.filters i {
  position: absolute;
  right: 15px;
  top: 16px;
  color: var(--text);
}
.countries {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 3rem;
  grid-auto-rows: minmax(100px, auto);
  margin: 70px auto;
}
.country {
  background: var(--bgColor);
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 11px hsla(208.4, 23.5%, 31.8%, 0.39),
    -1.5px -1.5px 11px rgba(0, 0, 0, 0);
}

.country h3,
p {
  margin-left: 10px;
  color: var(--text);
}
.countryflag {
  width: 270px;
  height: auto;
}
a {
  text-decoration: none;
  color: black;
}
@media screen and (max-width: 500px) {
  .controls-section {
    flex-direction: column;
  }
  .filters {
    margin-top: 2rem;
  }
}
</style>