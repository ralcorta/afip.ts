/**
 * SOAP client interface (generated). DTOs: @application/dto/ct/service-soap.types
 * Regenerate: npm run generate:soap-interfaces
 */
export * from "@application/dto/ct/service-soap.types";

import type {
  IautorizarComprobanteInput,
  IautorizarComprobanteOutput,
  IconsultarCUITsPaisesInput,
  IconsultarCUITsPaisesOutput,
  IconsultarCodigosItemTurismoInput,
  IconsultarCodigosItemTurismoOutput,
  IconsultarComprobanteTipoPVentaNroInput,
  IconsultarComprobanteTipoPVentaNroOutput,
  IconsultarCondicionesIVAInput,
  IconsultarCondicionesIVAOutput,
  IconsultarCotizacionInput,
  IconsultarCotizacionOutput,
  IconsultarFormasPagoInput,
  IconsultarFormasPagoOutput,
  IconsultarMonedasInput,
  IconsultarMonedasOutput,
  IconsultarNovedadesInput,
  IconsultarNovedadesOutput,
  IconsultarPaisesInput,
  IconsultarPaisesOutput,
  IconsultarPuntosVentaInput,
  IconsultarPuntosVentaOutput,
  IconsultarRelacionEmisorReceptorInput,
  IconsultarRelacionEmisorReceptorOutput,
  IconsultarTiposComprobantesInput,
  IconsultarTiposComprobantesOutput,
  IconsultarTiposCuentaInput,
  IconsultarTiposCuentaOutput,
  IconsultarTiposDatosAdicionalesInput,
  IconsultarTiposDatosAdicionalesOutput,
  IconsultarTiposDocumentoInput,
  IconsultarTiposDocumentoOutput,
  IconsultarTiposIVAInput,
  IconsultarTiposIVAOutput,
  IconsultarTiposItemInput,
  IconsultarTiposItemOutput,
  IconsultarTiposTarjetaInput,
  IconsultarTiposTarjetaOutput,
  IconsultarTiposTributoInput,
  IconsultarTiposTributoOutput,
  IconsultarUltimoComprobanteAutorizadoInput,
  IconsultarUltimoComprobanteAutorizadoOutput,
  IdummyInput,
  IdummyOutput,
} from "@application/dto/ct/service-soap.types";

import { Client } from "soap";

export interface ICTServiceSOAPSoap extends Client {
    dummy: (input: IdummyInput, cb: (err: any | null, result: IdummyOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    autorizarComprobante: (input: IautorizarComprobanteInput, cb: (err: any | null, result: IautorizarComprobanteOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarUltimoComprobanteAutorizado: (input: IconsultarUltimoComprobanteAutorizadoInput, cb: (err: any | null, result: IconsultarUltimoComprobanteAutorizadoOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarComprobanteTipoPVentaNro: (input: IconsultarComprobanteTipoPVentaNroInput, cb: (err: any | null, result: IconsultarComprobanteTipoPVentaNroOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarPuntosVenta: (input: IconsultarPuntosVentaInput, cb: (err: any | null, result: IconsultarPuntosVentaOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposComprobantes: (input: IconsultarTiposComprobantesInput, cb: (err: any | null, result: IconsultarTiposComprobantesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarMonedas: (input: IconsultarMonedasInput, cb: (err: any | null, result: IconsultarMonedasOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarCotizacion: (input: IconsultarCotizacionInput, cb: (err: any | null, result: IconsultarCotizacionOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposDocumento: (input: IconsultarTiposDocumentoInput, cb: (err: any | null, result: IconsultarTiposDocumentoOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarPaises: (input: IconsultarPaisesInput, cb: (err: any | null, result: IconsultarPaisesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarCUITsPaises: (input: IconsultarCUITsPaisesInput, cb: (err: any | null, result: IconsultarCUITsPaisesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposIVA: (input: IconsultarTiposIVAInput, cb: (err: any | null, result: IconsultarTiposIVAOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposDatosAdicionales: (input: IconsultarTiposDatosAdicionalesInput, cb: (err: any | null, result: IconsultarTiposDatosAdicionalesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposTributo: (input: IconsultarTiposTributoInput, cb: (err: any | null, result: IconsultarTiposTributoOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarCondicionesIVA: (input: IconsultarCondicionesIVAInput, cb: (err: any | null, result: IconsultarCondicionesIVAOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarNovedades: (input: IconsultarNovedadesInput, cb: (err: any | null, result: IconsultarNovedadesOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarFormasPago: (input: IconsultarFormasPagoInput, cb: (err: any | null, result: IconsultarFormasPagoOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposItem: (input: IconsultarTiposItemInput, cb: (err: any | null, result: IconsultarTiposItemOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarCodigosItemTurismo: (input: IconsultarCodigosItemTurismoInput, cb: (err: any | null, result: IconsultarCodigosItemTurismoOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarRelacionEmisorReceptor: (input: IconsultarRelacionEmisorReceptorInput, cb: (err: any | null, result: IconsultarRelacionEmisorReceptorOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposCuenta: (input: IconsultarTiposCuentaInput, cb: (err: any | null, result: IconsultarTiposCuentaOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    consultarTiposTarjeta: (input: IconsultarTiposTarjetaInput, cb: (err: any | null, result: IconsultarTiposTarjetaOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;

    dummyAsync: (input: IdummyInput) => Promise<[IdummyOutput, string, {[k: string]: any}, any]>;
    autorizarComprobanteAsync: (input: IautorizarComprobanteInput) => Promise<[IautorizarComprobanteOutput, string, {[k: string]: any}, any]>;
    consultarUltimoComprobanteAutorizadoAsync: (input: IconsultarUltimoComprobanteAutorizadoInput) => Promise<[IconsultarUltimoComprobanteAutorizadoOutput, string, {[k: string]: any}, any]>;
    consultarComprobanteTipoPVentaNroAsync: (input: IconsultarComprobanteTipoPVentaNroInput) => Promise<[IconsultarComprobanteTipoPVentaNroOutput, string, {[k: string]: any}, any]>;
    consultarPuntosVentaAsync: (input: IconsultarPuntosVentaInput) => Promise<[IconsultarPuntosVentaOutput, string, {[k: string]: any}, any]>;
    consultarTiposComprobantesAsync: (input: IconsultarTiposComprobantesInput) => Promise<[IconsultarTiposComprobantesOutput, string, {[k: string]: any}, any]>;
    consultarMonedasAsync: (input: IconsultarMonedasInput) => Promise<[IconsultarMonedasOutput, string, {[k: string]: any}, any]>;
    consultarCotizacionAsync: (input: IconsultarCotizacionInput) => Promise<[IconsultarCotizacionOutput, string, {[k: string]: any}, any]>;
    consultarTiposDocumentoAsync: (input: IconsultarTiposDocumentoInput) => Promise<[IconsultarTiposDocumentoOutput, string, {[k: string]: any}, any]>;
    consultarPaisesAsync: (input: IconsultarPaisesInput) => Promise<[IconsultarPaisesOutput, string, {[k: string]: any}, any]>;
    consultarCUITsPaisesAsync: (input: IconsultarCUITsPaisesInput) => Promise<[IconsultarCUITsPaisesOutput, string, {[k: string]: any}, any]>;
    consultarTiposIVAAsync: (input: IconsultarTiposIVAInput) => Promise<[IconsultarTiposIVAOutput, string, {[k: string]: any}, any]>;
    consultarTiposDatosAdicionalesAsync: (input: IconsultarTiposDatosAdicionalesInput) => Promise<[IconsultarTiposDatosAdicionalesOutput, string, {[k: string]: any}, any]>;
    consultarTiposTributoAsync: (input: IconsultarTiposTributoInput) => Promise<[IconsultarTiposTributoOutput, string, {[k: string]: any}, any]>;
    consultarCondicionesIVAAsync: (input: IconsultarCondicionesIVAInput) => Promise<[IconsultarCondicionesIVAOutput, string, {[k: string]: any}, any]>;
    consultarNovedadesAsync: (input: IconsultarNovedadesInput) => Promise<[IconsultarNovedadesOutput, string, {[k: string]: any}, any]>;
    consultarFormasPagoAsync: (input: IconsultarFormasPagoInput) => Promise<[IconsultarFormasPagoOutput, string, {[k: string]: any}, any]>;
    consultarTiposItemAsync: (input: IconsultarTiposItemInput) => Promise<[IconsultarTiposItemOutput, string, {[k: string]: any}, any]>;
    consultarCodigosItemTurismoAsync: (input: IconsultarCodigosItemTurismoInput) => Promise<[IconsultarCodigosItemTurismoOutput, string, {[k: string]: any}, any]>;
    consultarRelacionEmisorReceptorAsync: (input: IconsultarRelacionEmisorReceptorInput) => Promise<[IconsultarRelacionEmisorReceptorOutput, string, {[k: string]: any}, any]>;
    consultarTiposCuentaAsync: (input: IconsultarTiposCuentaInput) => Promise<[IconsultarTiposCuentaOutput, string, {[k: string]: any}, any]>;
    consultarTiposTarjetaAsync: (input: IconsultarTiposTarjetaInput) => Promise<[IconsultarTiposTarjetaOutput, string, {[k: string]: any}, any]>;
}
