import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);
import { FirestoreModel } from "./";
import { ISelectInput } from "../types";

// Attributos principales del modelo
export interface PortfolioAttributes {
  title: string;
  description: string;
  slug: string;
  languages: ISelectInput[];
  visible: boolean;
  highlight: boolean;
}

// No hace falta modificar esta interface
export interface PortfolioItem extends PortfolioAttributes {
  id: string;
}

// Validar los attributes para crear o editar
export const portfolioValidationRules = yup
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
export class PortfolioModel extends FirestoreModel {
  // Firestore table name
  static tableName: string = "portfolios";

  static find(id: string): Promise<PortfolioItem> {
    return super.retriveDoc(PortfolioModel.tableName, id);
  }

  static findAll(): Promise<PortfolioItem[]> {
    return super.retriveAllDoc(PortfolioModel.tableName);
  }

  static async create(attributes: PortfolioAttributes): Promise<string> {
    const docRef = await super.createDoc(PortfolioModel.tableName, attributes);
    return docRef.id;
  }

  static update(id: string, attributes: PortfolioAttributes): Promise<void> {
    return super.updateDoc(PortfolioModel.tableName, id, attributes);
  }

  static destroy(id: string): Promise<void> {
    return super.deleteDoc(PortfolioModel.tableName, id);
  }
}
