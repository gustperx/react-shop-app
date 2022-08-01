import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);
import { FirestoreModel } from ".";

// Attributos principales del modelo
export interface CategoryAttributes {
  name: string;
}

// No hace falta modificar esta interface
export interface CategoryItem extends CategoryAttributes {
  id: string;
}

// Validar los attributes para crear o editar
export const categoryValidationRules = yup
  .object({
    name: yup.string().min(1).required(),
  })
  .required();

// Clase Modelo
export class CategoryModel extends FirestoreModel {
  // Firestore table name
  static tableName: string = "categories";

  static find(id: string): Promise<CategoryItem> {
    return super.retriveDoc(CategoryModel.tableName, id);
  }

  static findAll(): Promise<CategoryItem[]> {
    return super.retriveAllDoc(CategoryModel.tableName);
  }

  static async create(attributes: CategoryAttributes): Promise<string> {
    const docRef = await super.createDoc(CategoryModel.tableName, attributes);
    return docRef.id;
  }

  static update(id: string, attributes: CategoryAttributes): Promise<void> {
    return super.updateDoc(CategoryModel.tableName, id, attributes);
  }

  static destroy(id: string): Promise<void> {
    return super.deleteDoc(CategoryModel.tableName, id);
  }
}
