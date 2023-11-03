import type { LocationRepository } from "../LocationRepository";
import type { FirestoreLocation } from "@/model/FirestoreLocation";
import { FirestoreService } from "./FirestoreService";
import { doc, getDocs, setDoc } from "firebase/firestore";

export class FirestoreLocationRepositoryImpl implements LocationRepository {
    constructor(private firestore: FirestoreService) {}

    async getLocation(): Promise<FirestoreLocation[]> {
        let result: FirestoreLocation[] = [];
        const query = await getDocs(this.firestore.cityColRef);
        query.forEach((doc) => {
            result.push(doc.data() as FirestoreLocation);
        });
        return result;
    }

    async insertLocation(location: FirestoreLocation): Promise<Boolean> {
        try {
            await setDoc(doc(this.firestore.db, "city", location.id), {
                id: location.id,
                name: location.name
            });
            console.log("Document was created with ID:", location.id);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}
