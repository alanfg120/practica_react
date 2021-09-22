export interface Empresa {
  id: number;
  nombre: string;
  logo: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  whatsapp: string;
  email: string;
  web: string;
  latitud: number;
  longitud: number;
  estado: boolean;
  NIT: string;
  puntaje: number;
  id_categoria: number;
  id_usuario: number;
  popular: number;
  fecha: Date;
  matricula_mercantil: string;
}
