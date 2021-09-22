import axios from "axios";
import { ErrorHttp } from "../../../interfaces/errorHttp.interface";
import { Publicacion } from "../model/publicacion.model";

export class PublicacionesRepositorio {
  private static instance: PublicacionesRepositorio;

  constructor() {}

  public static getIntace(): PublicacionesRepositorio {
    if (!PublicacionesRepositorio.instance) {
      PublicacionesRepositorio.instance = new PublicacionesRepositorio();
    }
    return PublicacionesRepositorio.instance;
  }
  async getPublicaciones(page: number): Promise<Publicacion[] | ErrorHttp> {
    try {
      const response = await axios.get<Publicacion[]>(
        `${import.meta.env.VITE_API_URL}/publicaciones`,
        { params: { page, id: "2019" } }
      );
      return response.data;
    } catch (error) {
      return ErrorHttp.dataInvalid;
    }
  }
}
