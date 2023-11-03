import type { FirestoreLocation } from "@/model/FirestoreLocation";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

export class FirestoreService {
    db = getFirestore();

    cityColRef = collection(this.db, "city");

    cityColWithDocId = (documentId: string) => { return collection(this.db, "city", documentId) };
}
