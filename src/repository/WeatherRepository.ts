import type { CurrentRepository } from "./CurrentRepository";
import type { ForecastRepository } from "./ForecastRepository";
import type { SearchRepository } from "./SearchRepository";

export interface WeatherRepository
    extends CurrentRepository,
        SearchRepository,
        ForecastRepository {}
