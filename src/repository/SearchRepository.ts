import type { Location } from "@/model/Location";
import type { AxiosResponse } from "axios";

export interface SearchRepository {
    getSearch(q: string): Promise<AxiosResponse<Location[]>>;
}