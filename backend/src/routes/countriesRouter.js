import { Router } from "express";

import { getAvailableCountries, getCountryInfo } from "../controllers/countryController.js";

const router = Router();

router.get("/api/countries", getAvailableCountries);
router.get("/api/countries/:code", getCountryInfo);

export default router;