import { FirebaseError } from "firebase/app";
import { FirestoreErrors } from "../../types";

export const firebaseHandleError = (error: unknown) => {
  if (error instanceof FirebaseError) {
    return FirestoreErrors[error.code];
  } else {
    return "Error firebase unknown";
  }
};
