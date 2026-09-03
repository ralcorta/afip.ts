/**
 * SOAP DTOs generated from WSDL. Do not edit manually.
 * Regenerate: npm run generate:soap-interfaces
 */
export interface IdummyInput {}

export interface IdummyOutput {
    dummyReturn: CTServiceSOAPTypes.IdummyReturn;
}

export interface IautorizarComprobanteInput {
    comprobanteRequest: CTServiceSOAPTypes.IcomprobanteRequest;
}

export interface IautorizarComprobanteOutput {
    autorizarComprobanteReturn: CTServiceSOAPTypes.IautorizarComprobanteReturn;
}

export interface IconsultarUltimoComprobanteAutorizadoInput {
    codigoTipoComprobante: number;
    numeroPuntoVenta: number;
}

export interface IconsultarUltimoComprobanteAutorizadoOutput {
    consultarUltimoComprobanteAutorizadoReturn: CTServiceSOAPTypes.IconsultarUltimoComprobanteAutorizadoReturn;
}

export interface IconsultarComprobanteTipoPVentaNroInput {
    codigoTipoComprobante: number;
    numeroPuntoVenta: number;
    numeroComprobante: number;
}

export interface IconsultarComprobanteTipoPVentaNroOutput {
    consultarComprobanteReturn: CTServiceSOAPTypes.IconsultarComprobanteReturn;
}

export interface IconsultarPuntosVentaInput {
}

export interface IconsultarPuntosVentaOutput {
    consultarPuntosVentaReturn: CTServiceSOAPTypes.IconsultarPuntosVentaReturn;
}

export interface IconsultarTiposComprobantesInput {
}

export interface IconsultarTiposComprobantesOutput {
    consultarTiposComprobantesReturn: CTServiceSOAPTypes.IconsultarTiposComprobantesReturn;
}

export interface IconsultarMonedasInput {
}

export interface IconsultarMonedasOutput {
    consultarMonedasReturn: CTServiceSOAPTypes.IconsultarMonedasReturn;
}

export interface IconsultarCotizacionInput {
    codigoMoneda: string;
    fechaCotizacion: string;
}

export interface IconsultarCotizacionOutput {
    consultarCotizacionReturn: CTServiceSOAPTypes.IconsultarCotizacionReturn;
}

export interface IconsultarTiposDocumentoInput {
}

export interface IconsultarTiposDocumentoOutput {
    consultarTiposDocumentoReturn: CTServiceSOAPTypes.IconsultarTiposDocumentoReturn;
}

export interface IconsultarPaisesInput {
}

export interface IconsultarPaisesOutput {
    consultarPaisesReturn: CTServiceSOAPTypes.IconsultarPaisesReturn;
}

export interface IconsultarCUITsPaisesInput {
}

export interface IconsultarCUITsPaisesOutput {
    consultarCUITsPaisesReturn: CTServiceSOAPTypes.IconsultarCUITsPaisesReturn;
}

export interface IconsultarTiposIVAInput {
}

export interface IconsultarTiposIVAOutput {
    consultarTiposIVAReturn: CTServiceSOAPTypes.IconsultarTiposIVAReturn;
}

export interface IconsultarTiposDatosAdicionalesInput {
}

export interface IconsultarTiposDatosAdicionalesOutput {
    consultarTiposDatosAdicionalesReturn: CTServiceSOAPTypes.IconsultarTiposDatosAdicionalesReturn;
}

export interface IconsultarTiposTributoInput {
}

export interface IconsultarTiposTributoOutput {
    consultarTiposTributoReturn: CTServiceSOAPTypes.IconsultarTiposTributoReturn;
}

export interface IconsultarCondicionesIVAInput {
}

export interface IconsultarCondicionesIVAOutput {
    consultarCondicionesIVAReturn: CTServiceSOAPTypes.IconsultarCondicionesIVAReturn;
}

export interface IconsultarNovedadesInput {
}

export interface IconsultarNovedadesOutput {
    ConsultarNovedadesReturn: CTServiceSOAPTypes.IConsultarNovedadesReturn;
}

export interface IconsultarFormasPagoInput {
}

export interface IconsultarFormasPagoOutput {
    consultarFormasPagoReturn: CTServiceSOAPTypes.IconsultarFormasPagoReturn;
}

export interface IconsultarTiposItemInput {
}

export interface IconsultarTiposItemOutput {
    consultarTiposItemReturn: CTServiceSOAPTypes.IconsultarTiposItemReturn;
}

export interface IconsultarCodigosItemTurismoInput {
}

export interface IconsultarCodigosItemTurismoOutput {
    consultarCodigosItemTurismoReturn: CTServiceSOAPTypes.IconsultarCodigosItemTurismoReturn;
}

export interface IconsultarRelacionEmisorReceptorInput {
}

export interface IconsultarRelacionEmisorReceptorOutput {
    consultarRelacionEmisorReceptorReturn: CTServiceSOAPTypes.IconsultarRelacionEmisorReceptorReturn;
}

export interface IconsultarTiposCuentaInput {
}

export interface IconsultarTiposCuentaOutput {
    consultarTiposCuentaReturn: CTServiceSOAPTypes.IconsultarTiposCuentaReturn;
}

export interface IconsultarTiposTarjetaInput {
    formaPago: number;
}

export interface IconsultarTiposTarjetaOutput {
    consultarTiposTarjetaReturn: CTServiceSOAPTypes.IconsultarTiposTarjetaReturn;
}


export namespace CTServiceSOAPTypes {
    export interface IdummyReturn {
        appserver: string;
        authserver: string;
        dbserver: string;
    }
    export interface IauthRequest {
    }
    export interface Iitem {
        tipo: number;
        codigoTurismo: number;
        codigo: string;
        descripcion: string;
        codigoAlicuotaIVA: number;
        importeIVA: number;
        importeItem: number;
    }
    export interface IarrayItems {
        item: CTServiceSOAPTypes.Iitem[];
    }
    export interface IcomprobanteAsociado {
        codigoTipoComprobante: number;
        numeroPuntoVenta: number;
        numeroComprobante: number;
    }
    export interface IarrayComprobantesAsociados {
        comprobanteAsociado: CTServiceSOAPTypes.IcomprobanteAsociado[];
    }
    export interface IotroTributo {
        codigo: number;
        descripcion: string;
        baseImponible: number;
        importe: number;
    }
    export interface IarrayOtrosTributos {
        otroTributo: CTServiceSOAPTypes.IotroTributo[];
    }
    export interface IsubtotalIVA {
        codigo: number;
        importe: number;
    }
    export interface IarraySubtotalesIVA {
        subtotalIVA: CTServiceSOAPTypes.IsubtotalIVA[];
    }
    export interface ItipoDatoAdicional {
        t: number;
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;
        c6: string;
    }
    export interface IarrayDatosAdicionales {
        tipoDatoAdicional: CTServiceSOAPTypes.ItipoDatoAdicional[];
    }
    export interface IformaPago {
        codigo: number;
        tipoTarjeta: number;
        numeroTarjeta: number;
        swiftCode: string;
        tipoCuenta: number;
        numeroCuenta: number;
    }
    export interface IcomprobanteRequest {
        codigoTipoComprobante: number;
        numeroPuntoVenta: number;
        numeroComprobante: number;
        fechaEmision: string;
        codigoTipoAutorizacion: "A" | "E";
        codigoAutorizacion: number;
        fechaVencimiento: string;
        codigoTipoDocumento: number;
        numeroDocumento: string;
        idImpositivo: string;
        codigoPais: number;
        domicilioReceptor: string;
        codigoRelacionEmisorReceptor: number;
        importeGravado: number;
        importeNoGravado: number;
        importeExento: number;
        importeOtrosTributos: number;
        importeReintegro: number;
        importeTotal: number;
        codigoMoneda: string;
        cotizacionMoneda: number;
        cancelaEnMismaMonedaExtranjera: "S" | "N";
        observaciones: string;
        arrayItems: CTServiceSOAPTypes.IarrayItems;
        arrayComprobantesAsociados: CTServiceSOAPTypes.IarrayComprobantesAsociados;
        arrayOtrosTributos: CTServiceSOAPTypes.IarrayOtrosTributos;
        arraySubtotalesIVA: CTServiceSOAPTypes.IarraySubtotalesIVA;
        arrayDatosAdicionales: CTServiceSOAPTypes.IarrayDatosAdicionales;
        arrayFormasPago: {
            formaPago: CTServiceSOAPTypes.IformaPago[];
        };
    }
    export interface IcomprobanteResponse {
        cuit: number;
        codigoTipoComprobante: number;
        numeroPuntoVenta: number;
        numeroComprobante: number;
        fechaEmision: string;
        CAE: number;
        fechaVencimientoCAE: string;
    }
    export interface IcodigoDescripcion {
        codigo: number;
        descripcion: string;
    }
    export interface IarrayObservaciones {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IarrayErrores {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IcodigoDescripcionString {
        codigo: string;
        descripcion: string;
    }
    export interface IarrayErroresFormato {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IautorizarComprobanteReturn {
        comprobanteResponse: CTServiceSOAPTypes.IcomprobanteResponse;
        arrayObservaciones: CTServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
        resultado: "A" | "O" | "R";
    }
    export interface IconsultarUltimoComprobanteAutorizadoReturn {
        numeroComprobante: number;
        fechaEmision: string;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface Icomprobante {
        codigoTipoComprobante: number;
        numeroPuntoVenta: number;
        numeroComprobante: number;
        fechaEmision: string;
        codigoTipoAutorizacion: "A" | "E";
        codigoAutorizacion: number;
        fechaVencimiento: string;
        codigoTipoDocumento: number;
        numeroDocumento: string;
        idImpositivo: string;
        codigoPais: number;
        domicilioReceptor: string;
        codigoRelacionEmisorReceptor: number;
        importeGravado: number;
        importeNoGravado: number;
        importeExento: number;
        importeOtrosTributos: number;
        importeReintegro: number;
        importeTotal: number;
        codigoMoneda: string;
        cotizacionMoneda: number;
        cancelaEnMismaMonedaExtranjera: "S" | "N";
        observaciones: string;
        arrayItems: CTServiceSOAPTypes.IarrayItems;
        arrayComprobantesAsociados: CTServiceSOAPTypes.IarrayComprobantesAsociados;
        arrayOtrosTributos: CTServiceSOAPTypes.IarrayOtrosTributos;
        arraySubtotalesIVA: CTServiceSOAPTypes.IarraySubtotalesIVA;
        arrayDatosAdicionales: CTServiceSOAPTypes.IarrayDatosAdicionales;
        arrayFormasPago: {
            formaPago: CTServiceSOAPTypes.IformaPago[];
        };
    }
    export interface IconsultarComprobanteReturn {
        comprobante: CTServiceSOAPTypes.Icomprobante;
        arrayObservaciones: CTServiceSOAPTypes.IarrayObservaciones;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IpuntoVenta {
        numeroPuntoVenta: number;
        bloqueado: "S" | "N";
        fechaBaja: string;
    }
    export interface IarrayPuntosVenta {
        puntoVenta: CTServiceSOAPTypes.IpuntoVenta[];
    }
    export interface IconsultarPuntosVentaReturn {
        arrayPuntosVenta: CTServiceSOAPTypes.IarrayPuntosVenta;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposComprobantes {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarTiposComprobantesReturn {
        arrayTiposComprobantes: CTServiceSOAPTypes.IarrayTiposComprobantes;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposMoneda {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarMonedasReturn {
        arrayTiposMoneda: CTServiceSOAPTypes.IarrayTiposMoneda;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IconsultarCotizacionReturn {
        cotizacionMoneda: number;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposDocumento {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarTiposDocumentoReturn {
        arrayTiposDocumento: CTServiceSOAPTypes.IarrayTiposDocumento;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayPaises {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarPaisesReturn {
        arrayPaises: CTServiceSOAPTypes.IarrayPaises;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayCuitPaises {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarCUITsPaisesReturn {
        arrayCuitPaises: CTServiceSOAPTypes.IarrayCuitPaises;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposIVA {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarTiposIVAReturn {
        arrayTiposIVA: CTServiceSOAPTypes.IarrayTiposIVA;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposDatosAdicionales {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarTiposDatosAdicionalesReturn {
        arrayTiposDatosAdicionales: CTServiceSOAPTypes.IarrayTiposDatosAdicionales;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposTributo {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarTiposTributoReturn {
        arrayTiposTributo: CTServiceSOAPTypes.IarrayTiposTributo;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayCondicionesIVA {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IconsultarCondicionesIVAReturn {
        arrayCondicionesIVA: CTServiceSOAPTypes.IarrayCondicionesIVA;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayNovedades {
        codigoDescripcionString: CTServiceSOAPTypes.IcodigoDescripcionString[];
    }
    export interface IConsultarNovedadesReturn {
        arrayNovedades: CTServiceSOAPTypes.IarrayNovedades;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IconsultarFormasPagoReturn {
        arrayFormasPago: {
            codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
        };
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposItem {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarTiposItemReturn {
        arrayTiposItem: CTServiceSOAPTypes.IarrayTiposItem;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayCodigosItem {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarCodigosItemTurismoReturn {
        arrayCodigosItem: CTServiceSOAPTypes.IarrayCodigosItem;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayRelacionesEmisorReceptor {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarRelacionEmisorReceptorReturn {
        arrayRelacionesEmisorReceptor: CTServiceSOAPTypes.IarrayRelacionesEmisorReceptor;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposCuenta {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarTiposCuentaReturn {
        arrayTiposCuenta: CTServiceSOAPTypes.IarrayTiposCuenta;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
    export interface IarrayTiposTarjeta {
        codigoDescripcion: CTServiceSOAPTypes.IcodigoDescripcion[];
    }
    export interface IconsultarTiposTarjetaReturn {
        arrayTiposTarjeta: CTServiceSOAPTypes.IarrayTiposTarjeta;
        arrayErrores: CTServiceSOAPTypes.IarrayErrores;
        arrayErroresFormato: CTServiceSOAPTypes.IarrayErroresFormato;
    }
}
