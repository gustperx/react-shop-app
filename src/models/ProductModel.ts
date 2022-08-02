import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);
import { FirestoreModel } from "./";
import { ISelectInput, TextDescription } from "../types";

// Attributos principales del modelo
export interface ProductAttributes {
  title: string;
  description: TextDescription;
  slug: string;
  categories: ISelectInput[];
  visible: boolean;
  highlight: boolean;
  image_one?: string;
  image_two?: string;
  image_three?: string;
}

// No hace falta modificar esta interface
export interface ProductItem extends ProductAttributes {
  id: string;
}

// Validar los attributes para crear o editar
export const productValidationRules = yup
  .object({
    title: yup.string().min(3).required(),
    description: yup.object().required(),
    slug: yup.string().min(3).required(),
    visible: yup.boolean().required(),
    highlight: yup.boolean().required(),
    categories: yup.array().min(1).required(),
    image_one: yup.string(),
    image_two: yup.string(),
    image_three: yup.string()
  })
  .required();

// Clase Modelo
export class ProductModel extends FirestoreModel {
  // Firestore table name
  static tableName: string = "products";

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
