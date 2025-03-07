// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";

export async function createArticle({ title, body }) {
  const data = { title, body, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "articles"), data);
  return { id: docRef.id, ...data };
}

// NOT FINISHED: This only gets the first 50 articles. In a real app,
// you implement pagination.
export async function fetchArticles() {
  const querySnapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  );
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteArticle(id) {
  await deleteDoc(doc(db, "articles", id));
  console.log(`${id} deleted!`);
  return id;
}