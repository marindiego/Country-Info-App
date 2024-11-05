import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

class CountryService {
  constructor() {
    this.apiUrl = process.env.API_URL;
    this.countriesNowApi = process.env.COUNTRIES_NOW_API;
  }
  async getAvailableCountries() {
    const response = await axios.get(`${this.apiUrl}/AvailableCountries`);
    return response.data;
  }
  async getBasicCountryInfo(countryCode) {
    const response = await axios.get(`${this.apiUrl}/CountryInfo/${countryCode}`);
    return response.data;
  }

  async getPopulationData(countryName) {
    const response = await axios.post(`${this.countriesNowApi}/population`, {
      country: countryName,
    });
    return response.data.data.populationCounts;
  }

  async getFlagUrl(countryName) {
    const response = await axios.post(`${this.countriesNowApi}/flag/images`, {
      country: countryName,
    });
    return response.data.data.flag;
  }
}

export default new CountryService(); 