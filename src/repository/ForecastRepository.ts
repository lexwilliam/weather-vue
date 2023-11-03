import type { WeatherForecast } from "@/model/WeatherForecast";
import type { AxiosResponse } from "axios";

export interface ForecastRepository {
    getForecast(id: string): Promise<AxiosResponse<WeatherForecast>>;
}
