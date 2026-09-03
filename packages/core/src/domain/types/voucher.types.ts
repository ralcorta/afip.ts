export interface IVoucher {
  CantReg: number;
  PtoVta: number;
  CbteTipo: number;
  Concepto: number;
  DocTipo: number;
  DocNro: number;
  CbteDesde: number;
  CbteHasta: number;
  CbteFch: string;
  ImpTotal: number;
  ImpTotConc: number;
  ImpNeto: number;
  ImpOpEx: number;
  ImpIVA: number;
  ImpTrib: number;
  FchServDesde?: string;
  FchServHasta?: string;
  FchVtoPago?: string;
  MonId: string;
  MonCotiz: number;
  CanMisMonExt?: string;
  CondicionIVAReceptorId: number;
  CbtesAsoc?: ICbtesAsoc[];
  /** Periodo asociado (NC/ND). Alternativa a CbtesAsoc cuando no se informa comprobante puntual. */
  PeriodoAsoc?: IPeriodoAsoc | null;
  Tributos?: ITributo[];
  Iva?: IIva[];
  Opcionales?: IOpcional[];
  Compradores?: IComprador[];
}

export interface INextVoucher extends Omit<
  IVoucher,
  "CbteDesde" | "CbteHasta"
> {
  CbteDesde?: number;
  CbteHasta?: number;
}

export interface ICbtesAsoc {
  Tipo: number;
  PtoVta: number;
  Nro: number;
  Cuit: string;
  CbteFch?: string;
}

/** Periodo asociado a NC/ND (YYYYMMDD). Requerido por ARCA si no se envía CbtesAsoc. */
export interface IPeriodoAsoc {
  FchDesde: string;
  FchHasta: string;
}

export interface IComprador {
  DocTipo: number;
  DocNro: number;
  Porcentaje: number;
}

export interface IIva {
  Id: number;
  BaseImp: number;
  Importe: number;
}

export interface IOpcional {
  Id: string;
  Valor: string;
}

export interface ITributo {
  Id: number;
  Desc: string;
  BaseImp: number;
  Alic: number;
  Importe: number;
}
