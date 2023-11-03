import type { FirestoreLocation } from "@/model/FirestoreLocation";
import type { AxiosResponse } from "axios";

export interface LocationRepository {
    getLocation(): Promise<FirestoreLocation[]>;
    insertLocation(location: FirestoreLocation): Promise<Boolean>;
}
