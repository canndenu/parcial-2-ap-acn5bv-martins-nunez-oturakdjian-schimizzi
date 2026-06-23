# QA — Validaciones de formularios

Casos de prueba de las validaciones de entrada.

## Perfil
| Campo | Caso | Resultado esperado |
|---|---|---|
| Email | sin "@" | Rechaza y muestra error |
| Teléfono | con letras | Rechaza |
| Nombre | vacío | Rechaza, campo obligatorio |

## Solicitud de envío
| Campo | Caso | Resultado esperado |
|---|---|---|
| Origen | vacío | No deja avanzar |
| Destino | fuera de cobertura | Avisa que la zona no está cubierta |
| Peso | 0 o negativo | Rechaza |
