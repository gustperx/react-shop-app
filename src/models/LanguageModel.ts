import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);
import { FirestoreModel } from ".";

// Attributos principales del modelo
export interface LanguageAttributes {
  name: string;
}

// No hace falta modificar esta interface
export interface LanguageItem extends LanguageAttributes {
  id: string;
}

// Validar los attributes para crear o editar
export const languageValidationRules = yup
  .object({
    name: yup.string().min(1).required(),
  })
  .required();

// Clase Modelo
export class LanguageModel extends FirestoreModel {
  // Firestore table name
  static tableName: string = "languages";

  static find(id: string): Promise<LanguageItem> {
    return super.retriveDoc(LanguageModel.tableName, id);
  }

  static findAll(): Promise<LanguageItem[]> {
    return super.retriveAllDoc(LanguageModel.tableName);
  }

  static async create(attributes: LanguageAttributes): Promise<string> {
    const docRef = await super.createDoc(LanguageModel.tableName, attributes);
    return docRef.id;
  }

  static update(id: string, attributes: LanguageAttributes): Promise<void> {
    return super.updateDoc(LanguageModel.tableName, id, attributes);
  }

  static destroy(id: string): Promise<void> {
    return super.deleteDoc(LanguageModel.tableName, id);
  }
}
