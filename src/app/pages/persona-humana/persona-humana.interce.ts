export interface PersonaHumanaI {
  id:                   string;
  calle:                string;
  nroCalle:             string;
  piso:                 string;
  dpto:                 string;
  localidad:            string;
  codPostal:            string;
  telefono:             string;
  provincia:            string;
  paisResidencia:       string;
  ocupacion:            string;
  inscripRegistral:     string;
  cuit:                 number;
  tipoPersona:          string;
  rsocial:              string;
  segmento:             string;
  nis:                  string;
  montoMax:             number;
  contrConstLugFec:     string;
  contrConstFecInsc:    Date;
  contrConstObjeto:     string;
  contrConstDuracion:   string;
  mail:                 string;
  operador:             string;
  docOperador:          string;
  observaciones:        string;
  fechaConfeccionFicha: Date;
  fechaAlta:            Fecha;
  subtipoPersona:       string;
  codOperador:          string;
  fechaModificacion:    Fecha;
  telefonoMovil:        string;
  region:               string;
  detalleId:            number;
  modifica:             string;
  direccionId:          number;
  conyugeId:            number;
}

export interface Fecha {
  year:  number;
  month: number;
  day:   number;
}
