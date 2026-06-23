# Backend — Logitrack

API que resuelve la gestión de envíos, pagos y verificación de choferes.
Cada módulo corresponde a una o varias historias de usuario del backlog.

## Módulos

| Archivo | HU | Qué hace |
|---|---|---|
| `envios.js` | HU03 | Crea una solicitud de envío con origen, destino y paquete. |
| `tarifas.js` | HU05 | Calcula el costo del envío y devuelve el desglose del precio. |
| `pagos.js` | HU06 | Genera la preferencia de pago y procesa el webhook de Mercado Pago. |
| `seguimiento.js` | HU07 | Genera el código de seguimiento y su QR al confirmarse el pago. |
| `asignaciones.js` | HU10 | Asigna automáticamente moto, auto o camión según el paquete. |
| `verificacionIdentidad.js` | HU22 | Verifica el DNI y el rostro del chofer antes de habilitarlo. |

## Flujo de un envío

1. El cliente crea la solicitud (`envios.js`).
2. Se calcula el costo (`tarifas.js`) y se asigna el vehículo (`asignaciones.js`).
3. El cliente paga (`pagos.js`); el webhook confirma el pago.
4. Se genera el código de seguimiento (`seguimiento.js`).
5. Para operar, el chofer debe estar verificado (`verificacionIdentidad.js`).

> Código de simulación con fines académicos para Administración de Proyectos.
