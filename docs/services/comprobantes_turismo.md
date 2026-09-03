# Comprobantes T de Turismo (WSCT)

El servicio `wsctService` autoriza y consulta **comprobantes clase T** para servicios de alojamiento a turistas extranjeros, a través del Web Service CT (WSCT).

::: info Documentación Oficial
[Manual del Desarrollador WSCT v1.6.4 - ARCA (PDF)](https://www.afip.gob.ar/ws/documentacion/manuales/Manual_Desarrollador_WSCT_v1.6.4.pdf)
:::

::: tip Detalles técnicos
- WSCT usa **SOAP 1.1** internamente (como WSFECRED).
- También podés invocar cualquier operación vía [`genericService`](/services/generic-service) con `ArcaServiceNames.WSCT`.
:::

[[toc]]

---

## Requisitos

- El emisor debe estar empadronado en una actividad de hospedaje/turismo.
- El certificado debe tener autorizado el web service `wsct` en el portal ARCA. Ver [Gestión de credenciales](/credential_management).
- Debe existir un punto de venta habilitado para este servicio.

Si el certificado no tiene el WS autorizado, WSAA responde `coe.notAuthorized`. Ver [Errores frecuentes — coe.notAuthorized](/faq/errors#soap-fault-ns1-coe-notauthorized-computador-no-autorizado-a-acceder-al-servicio).

Los tipos de comprobante vigentes se consultan con `consultarTiposComprobantes()` (habitualmente Factura T, Nota de Débito T y Nota de Crédito T). No hardcodees el código: obtenelo del catálogo antes de autorizar o consultar.

```ts
const tipos = await arca.wsctService.consultarTiposComprobantes();
console.log(tipos.consultarTiposComprobantesReturn.arrayTiposComprobantes);
```

---

## Autorizar comprobante

`autorizarComprobante` envía el comprobante y obtiene el CAE. Conviene consultar antes el último número autorizado para el mismo punto de venta y tipo.

```ts
const tipos = await arca.wsctService.consultarTiposComprobantes();
const codigoTipoComprobante =
  tipos.consultarTiposComprobantesReturn.arrayTiposComprobantes
    .codigoDescripcion[0].codigo;

const ultimo = await arca.wsctService.consultarUltimoComprobanteAutorizado({
  codigoTipoComprobante,
  numeroPuntoVenta: 1,
});

const proximo =
  Number(ultimo.consultarUltimoComprobanteAutorizadoReturn.numeroComprobante ?? 0) +
  1;

const result = await arca.wsctService.autorizarComprobante({
  comprobanteRequest: {
    codigoTipoComprobante,
    numeroPuntoVenta: 1,
    numeroComprobante: proximo,
    fechaEmision: "2026-09-03",
    codigoTipoDocumento: 91,
    numeroDocumento: "AB123456",
    idImpositivo: "IVAEX",
    codigoPais: 212,
    domicilioReceptor: "Hotel example",
    codigoRelacionEmisorReceptor: 1,
    importeGravado: 100,
    importeNoGravado: 0,
    importeExento: 0,
    importeOtrosTributos: 0,
    importeReintegro: 0,
    importeTotal: 121,
    codigoMoneda: "PES",
    cotizacionMoneda: 1,
    arrayItems: {
      item: [
        {
          tipo: 0,
          codigoTurismo: 1,
          codigo: "ALOJ",
          descripcion: "Alojamiento",
          codigoAlicuotaIVA: 5,
          importeIVA: 21,
          importeItem: 121,
        },
      ],
    },
    arraySubtotalesIVA: {
      subtotalIVA: [{ codigo: 5, importe: 21 }],
    },
  },
});

const { resultado, comprobanteResponse, arrayErrores } =
  result.autorizarComprobanteReturn;

if (resultado === "A" || resultado === "O") {
  console.log(comprobanteResponse?.CAE);
  console.log(comprobanteResponse?.fechaVencimientoCAE);
} else {
  console.error("Comprobante rechazado", arrayErrores);
}
```

`resultado` puede ser `"A"` (aprobado), `"O"` (aprobado con observaciones) o `"R"` (rechazado). Si es `"R"`, `comprobanteResponse` puede no venir; revisá `arrayErrores` y `arrayErroresFormato`.

Los códigos de ítem de turismo se obtienen con `consultarCodigosItemTurismo()`. Los tipos de ítem, con `consultarTiposItem()`.

---

## Consultar comprobante autorizado

```ts
const tipos = await arca.wsctService.consultarTiposComprobantes();
const codigoTipoComprobante =
  tipos.consultarTiposComprobantesReturn.arrayTiposComprobantes
    .codigoDescripcion[0].codigo;

const result = await arca.wsctService.consultarComprobanteTipoPVentaNro({
  codigoTipoComprobante,
  numeroPuntoVenta: 1,
  numeroComprobante: 1,
});

console.log(result.consultarComprobanteReturn.comprobante);
```

---

## Último comprobante autorizado

```ts
const tipos = await arca.wsctService.consultarTiposComprobantes();
const codigoTipoComprobante =
  tipos.consultarTiposComprobantesReturn.arrayTiposComprobantes
    .codigoDescripcion[0].codigo;

const result = await arca.wsctService.consultarUltimoComprobanteAutorizado({
  codigoTipoComprobante,
  numeroPuntoVenta: 1,
});

console.log(result.consultarUltimoComprobanteAutorizadoReturn.numeroComprobante);
```

---

## Cotización de moneda

```ts
const result = await arca.wsctService.consultarCotizacion({
  codigoMoneda: "DOL",
  fechaCotizacion: "2026-09-03",
});

console.log(result.consultarCotizacionReturn.cotizacionMoneda);
```

---

## Tipos de tarjeta

Requiere el código de forma de pago (ver `consultarFormasPago()`).

```ts
const result = await arca.wsctService.consultarTiposTarjeta({
  formaPago: 1,
});

console.log(result.consultarTiposTarjetaReturn.arrayTiposTarjeta);
```

---

## Catálogos y parámetros

```ts
await arca.wsctService.consultarPuntosVenta();
await arca.wsctService.consultarTiposComprobantes();
await arca.wsctService.consultarTiposDocumento();
await arca.wsctService.consultarTiposItem();
await arca.wsctService.consultarCodigosItemTurismo();
await arca.wsctService.consultarTiposIVA();
await arca.wsctService.consultarCondicionesIVA();
await arca.wsctService.consultarTiposTributo();
await arca.wsctService.consultarMonedas();
await arca.wsctService.consultarPaises();
await arca.wsctService.consultarCUITsPaises();
await arca.wsctService.consultarRelacionEmisorReceptor();
await arca.wsctService.consultarFormasPago();
await arca.wsctService.consultarTiposCuenta();
await arca.wsctService.consultarTiposDatosAdicionales();
await arca.wsctService.consultarNovedades();
```

---

## Servicio genérico

Cualquier operación del WSDL también se puede invocar con `genericService`:

```ts
import { ArcaServiceNames } from "@arcasdk/core";

await arca.genericService.call(
  ArcaServiceNames.WSCT,
  "consultarTiposComprobantes",
  {},
);
```

Ver [Servicio genérico](/services/generic-service) para más detalles.

---

## Dummy (estado del servicio)

Según el WSDL, `dummy` no lleva `authRequest` en el body (el SDK no inyecta ticket WSAA en esta operación).

::: warning Homologación
En homologación ARCA puede responder `[common_001] Acceso Denegado` a `dummy`, aun sin autenticación. Para validar conectividad y credenciales, preferí una operación autenticada como `consultarTiposComprobantes()`.
:::

```ts
const status = await arca.wsctService.dummy();

console.log(status.dummyReturn.appserver);
console.log(status.dummyReturn.dbserver);
console.log(status.dummyReturn.authserver);
```
