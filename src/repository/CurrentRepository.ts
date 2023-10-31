import type { Weather } from "@/model/Weather";
import type { AxiosResponse } from "axios";

export interface CurrentRepository {
    getCurrent(id: string): Promise<AxiosResponse<Weather>>
}