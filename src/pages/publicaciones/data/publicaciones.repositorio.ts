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
  async getPublicaciones(page: number): Promise<Publicacion[]> {
    return [new Publicacion('jajaaj'),new Publicacion('jajaaj2')];
  }
}
