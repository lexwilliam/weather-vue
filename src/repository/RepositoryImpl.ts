import type { AxiosResponse } from "axios";
import type { Repository } from "./Repository";
import axios from "axios";
import type { Weather } from "@/model/Weather";
import type { Location } from "@/model/Location";

const baseUrl = "http://api.weatherapi.com/v1";
const apiKey = "60f223943c744468bec72338232510";
const currentApi = `${baseUrl}/current.json?key=${apiKey}`;
const searchApi = `${baseUrl}/search.json?key=${apiKey}`;

export class RepositoryImpl implements Repository {
    async getCurrent(id: string): Promise<AxiosResponse<Weather, any>> {
        return await axios.get<Weather>(`${currentApi}&q=id:${id}`);
    }
    async getSearch(q: string): Promise<AxiosResponse<Location[], any>> {
        return await axios.get<Location[]>(`${searchApi}&q=${q}`);
    }
}
