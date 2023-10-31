import type { CurrentRepository } from "./CurrentRepository";
import type { SearchRepository } from "./SearchRepository";

export interface Repository extends CurrentRepository, SearchRepository {}