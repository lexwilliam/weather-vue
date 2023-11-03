import { Container, injected, token } from "brandi";
import type { LocationRepository } from "./repository/LocationRepository";
import { FirestoreLocationRepositoryImpl } from "./repository/firebase/FirestoreLocationRepositoryImpl";
import type { WeatherRepository } from "./repository/WeatherRepository";
import { WeatherRepositoryImpl } from "./repository/WeatherRepositoryImpl";
import { FirestoreService } from "./repository/firebase/FirestoreService";

export const TOKENS = {
    // Service
    FirestoreService: token<FirestoreService>("FirestoreService"),
    // Repository
    LocationRepository: token<LocationRepository>("LocationRepository"),
    WeatherRepository: token<WeatherRepository>("WeatherRepository"),
};

export const container = new Container();

container
    .bind(TOKENS.FirestoreService)
    .toInstance(FirestoreService)
    .inSingletonScope();

container
    .bind(TOKENS.LocationRepository)
    .toInstance(FirestoreLocationRepositoryImpl)
    .inSingletonScope();

container
    .bind(TOKENS.WeatherRepository)
    .toInstance(WeatherRepositoryImpl)
    .inSingletonScope();

injected(FirestoreLocationRepositoryImpl, TOKENS.FirestoreService);
