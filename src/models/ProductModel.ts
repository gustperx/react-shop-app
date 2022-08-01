import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);
import { FirestoreModel } from "./";
import { ISelectInput } from "../types";

// Attributos principales del modelo
export interface ProductAttributes {
  title: string;
  description: string;
  slug: string;
  languages: ISelectInput[];
  visible: boolean;
  highlight: boolean;
}

// No hace falta modificar esta interface
export interface ProductItem extends ProductAttributes {
  id: string;
}

// Validar los attributes para crear o editar
export const productValidationRules = yup
  .object({
    title: yup.string().min(3).required(),
    description: yup.string().min(3).required(),
    slug: yup.string().min(3).required(),
    visible: yup.boolean().required(),
    highlight: yup.boolean().required(),
    languages: yup.array().min(1).required(),
  })
  .required();

// Clase Modelo
export class ProductModel extends FirestoreModel {
  // Firestore table name
  static tableName: string = "portfolios";

  static find(id: string): Promise<ProductItem> {
    return super.retriveDoc(ProductModel.tableName, id);
  }

  static findAll(): Promise<ProductItem[]> {
    return super.retriveAllDoc(ProductModel.tableName);
  }

  static async create(attributes: ProductAttributes): Promise<string> {
    const docRef = await super.createDoc(ProductModel.tableName, attributes);
    return docRef.id;
  }

  static update(id: string, attributes: ProductAttributes): Promise<void> {
    return super.updateDoc(ProductModel.tableName, id, attributes);
  }

  static destroy(id: string): Promise<void> {
    return super.deleteDoc(ProductModel.tableName, id);
  }
}
