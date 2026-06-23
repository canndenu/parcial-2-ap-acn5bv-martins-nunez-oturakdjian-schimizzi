# QA — Criterios de aceptación (HU01–HU07)

Checklist de validación funcional de las primeras historias de usuario.

## HU01 - Inicio de sesión
- [x] Ingresa con email y contraseña válidos
- [x] Muestra error sin indicar qué campo falló
- [x] Mantiene la sesión con token

## HU02 - Gestión de perfil
- [x] Visualiza y edita los datos permitidos
- [x] Valida formato de email y teléfono

## HU03 - Solicitud de envío
- [x] Valida origen, destino y datos del paquete
- [x] Queda registrada en estado "pendiente"

## HU04 - Recomendación con Boxy
- [x] Devuelve una recomendación coherente
- [x] Pide más información si la descripción es insuficiente

## HU05 - Cálculo de costo
- [x] Calcula según distancia, peso y vehículo
- [x] Muestra el desglose antes de confirmar

## HU06 - Pago con Mercado Pago
- [x] Redirige con el monto correcto
- [x] Confirma el envío por webhook

## HU07 - Código de seguimiento
- [x] Se genera automáticamente al confirmar el pago
