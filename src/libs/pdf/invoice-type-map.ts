export const InvoiceTypeMap: Map<string, number> = new Map(
  Object.entries({
    "FACTURAS A": 1,
    A: 1,
    "NOTAS DE DEBITO A": 2,
    "NOTAS DE CREDITO A": 3,
    "RECIBOS A": 4,
    "NOTAS DE VENTA AL CONTADO A": 5,
    "FACTURAS B": 6,
    B: 6,
    "NOTAS DE DEBITO B": 7,
    "NOTAS DE CREDITO B": 8,
    "RECIBOS B": 9,
    "NOTAS DE VENTA AL CONTADO B": 10,
    "FACTURAS C": 11,
    C: 11,
    "NOTAS DE DEBITO C": 12,
    "NOTAS DE CREDITO C": 13,
    "RECIBOS C": 15,
    "NOTAS DE VENTA AL CONTADO C": 16,
    "LIQUIDACION DE SERVICIOS PUBLICOS CLASE A": 17,
    "LIQUIDACION DE SERVICIOS PUBLICOS CLASE B": 18,
    "FACTURAS DE EXPORTACION": 19,
    E: 19,
    "NOTAS DE DEBITO POR OPERACIONES CON EL EXTERIOR": 20,
    "NOTAS DE CREDITO POR OPERACIONES CON EL EXTERIOR": 21,
    "FACTURAS - PERMISO EXPORTACION SIMPLIFICADO - DTO. 855/97": 22,
    "COMPROBANTES “A” DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO": 23,
    "COMPROBANTES “A” DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO": 24,
    "COMPROBANTES “B” DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO": 25,
    "COMPROBANTES “B” DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO": 26,
    "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A": 27,
    "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B": 28,
    "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C": 29,
    "COMPROBANTES DE COMPRA DE BIENES USADOS": 30,
    "MANDATO - CONSIGNACION": 31,
    "COMPROBANTES PARA RECICLAR MATERIALES": 32,
    "LIQUIDACION PRIMARIA DE GRANOS": 33,
    "COMPROBANTES A DEL APARTADO A  INCISO F)  R.G. N°  1415": 34,
    "COMPROBANTES B DEL ANEXO I, APARTADO A, INC. F), R.G. N° 1415": 35,
    "COMPROBANTES C DEL Anexo I, Apartado A, INC.F), R.G. N° 1415": 36,
    "NOTAS DE DEBITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415": 37,
    "NOTAS DE CREDITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415": 38,
    "OTROS COMPROBANTES A QUE CUMPLEN CON LA R G  1415": 39,
    "OTROS COMPROBANTES B QUE CUMPLAN CON LA R.G. N° 1415": 40,
    "OTROS COMPROBANTES C QUE CUMPLAN CON LA R.G. N° 1415": 41,
    "NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B": 43,
    "NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C": 44,
    "NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A": 45,
    "NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B": 46,
    "NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C": 47,
    "NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A": 48,
    "COMPROBANTES DE COMPRA DE BIENES NO REGISTRABLES A CONSUMIDORES FINALES": 49,
    "RECIBO FACTURA A  REGIMEN DE FACTURA DE CREDITO ": 50,
    "FACTURAS M": 51,
    "NOTAS DE DEBITO M": 52,
    "NOTAS DE CREDITO M": 53,
    "RECIBOS M": 54,
    "NOTAS DE VENTA AL CONTADO M": 55,
    "COMPROBANTES M DEL ANEXO I  APARTADO A  INC F) R.G. N° 1415": 56,
    "OTROS COMPROBANTES M QUE CUMPLAN CON LA R.G. N° 1415": 57,
    "CUENTAS DE VENTA Y LIQUIDO PRODUCTO M": 58,
    "LIQUIDACIONES M": 59,
    "CUENTAS DE VENTA Y LIQUIDO PRODUCTO A": 60,
    "CUENTAS DE VENTA Y LIQUIDO PRODUCTO B": 61,
    "LIQUIDACIONES A": 63,
    "LIQUIDACIONES B": 64,
    "DESPACHO DE IMPORTACION": 66,
    "LIQUIDACION C": 68,
    "RECIBOS FACTURA DE CREDITO": 70,
    "INFORME DIARIO DE CIERRE (ZETA) - CONTROLADORES FISCALES": 80,
    "TIQUE FACTURA A   ": 81,
    "TIQUE FACTURA B": 82,
    TIQUE: 83,
    "REMITO ELECTRONICO": 88,
    "RESUMEN DE DATOS": 89,
    "OTROS COMPROBANTES - DOCUMENTOS EXCEPTUADOS - NOTAS DE CREDITO": 90,
    "REMITOS R": 91,
    "OTROS COMPROBANTES QUE NO CUMPLEN O ESTÁN EXCEPTUADOS DE LA R.G. 1415 Y SUS MODIF ": 99,
    "TIQUE NOTA DE CREDITO ": 110,
    "TIQUE FACTURA C": 111,
    " TIQUE NOTA DE CREDITO A": 112,
    "TIQUE NOTA DE CREDITO B": 113,
    "TIQUE NOTA DE CREDITO C": 114,
    "TIQUE NOTA DE DEBITO A": 115,
    "TIQUE NOTA DE DEBITO B": 116,
    "TIQUE NOTA DE DEBITO C": 117,
    "TIQUE FACTURA M": 118,
    "TIQUE NOTA DE CREDITO M": 119,
    "TIQUE NOTA DE DEBITO M": 120,
    "FACTURA DE CRÉDITO ELECTRÓNICA MiPyMEs (FCE) A": 201,
    "NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) A": 202,
    "NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) A": 203,
    "FACTURA DE CRÉDITO ELECTRÓNICA MiPyMEs (FCE) B": 206,
    "NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) B": 207,
    "NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) B": 208,
    "FACTURA DE CRÉDITO ELECTRÓNICA MiPyMEs (FCE) C": 211,
    "NOTA DE DEBITO ELECTRÓNICA MiPyMEs (FCE) C": 212,
    "NOTA DE CREDITO ELECTRÓNICA MiPyMEs (FCE) C": 213,
    "LIQUIDACION SECUNDARIA DE GRANOS": 331,
    "CERTIFICACION ELECTRONICA (GRANOS)": 332,
    "REMITO ELECTRÓNICO CÁRNICO": 995,
  })
);