import dotenv from "dotenv";
dotenv.config();
import countryService from '../services/countryService.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getAvailableCountries = catchAsync(async (req, res) => {
    const countries = await countryService.getAvailableCountries();
    res.status(200).json(countries);
});

export const getCountryInfo = catchAsync(async (req, res) => {
  const { code } = req.params;

  const countryData = await countryService.getBasicCountryInfo(code);

  const [populationData, flagUrl] = await Promise.all([
    countryService.getPopulationData(countryData.commonName),
    countryService.getFlagUrl(countryData.commonName)
  ]);

  res.status(200).json({
    name: countryData.commonName,
    borders: countryData.borders,
    populationData,
    flagUrl
  });
});
