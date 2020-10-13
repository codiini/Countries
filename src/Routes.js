import ShowCountries from "./components/ShowCountries";
import CountryDetails from "./components/CountryDetails";


export default [
    {
        path:"/",
        name:"ShowCountries",
        component:ShowCountries
    },
    {
        path:"/country/:code",
        name:"CountryDetails",
        component:CountryDetails,
    }
]