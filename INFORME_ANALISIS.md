# Informe de análisis documental — CRUM Morelia

## 1. Material revisado
- `Reporte general DAPH 2026.xlsx`: 8 hojas visibles: Informe mensual derechohabiencia, Actividades, Gráficos Resumen, Datos importados, Tablas, Capacitaciones, Informe Salud mental e Informe semanal.
- `Servicios Otorgados 2026.pptx`: 9 diapositivas; presenta servicios por total, sede, descripción, diagnóstico presuntivo, SUMICH por jurisdicción, regulación y salud mental.
- `Reporte prevención de accidentes y seguridad vial 2026.pptx`: 7 diapositivas; aborda accidentes no viales, caídas, hechos viales y distribución por municipio/jurisdicción.
- `Resumen Atn. Prehospitalaria 2026.pptx`: 1 diapositiva de resumen.
- Imágenes de lineamientos ADDV: portada, introducción, identidad visual, logotipo, sistema de color y tipografía/iconografía.
- Prompt maestro de presentación ejecutiva.

## 2. Datos documentales identificados
El libro Excel contiene un resumen cuyo periodo explícito es del **1 de enero al 5 de febrero de 2026**, con hora de corte indicada en diferentes apartados. En `Gráficos Resumen` se muestran:
- Servicios prehospitalarios proporcionados por el Departamento (aéreos y terrestres): 546.
- Servicios prehospitalarios proporcionados por unidades SUMICH: 3,314.
- Regulaciones realizadas por CRUM: 219.
- Llamadas atendidas en salud mental: 178.
- Población capacitada como PRIUM: 22.
- Población sensibilizada en seguridad vial: 1,566.
- Población sensibilizada en prevención de accidentes: 835.
- Servicios prehospitalarios de otras corporaciones coordinados por CRUM: 4,527.

La hoja `Tablas` presenta para el DAPH:
- Enero: 469 servicios totales DAPH; el desglose visible muestra 431 servicios prehospitalarios terrestres, 4 aéreos y 34 administrativos. También registra 195 regulaciones médicas efectivas y 155 atenciones telefónicas en salud mental.
- Febrero al 5 de febrero: 77 servicios totales DAPH; el desglose visible muestra 70 servicios prehospitalarios terrestres, 0 aéreos y 7 administrativos. También registra 24 regulaciones médicas efectivas y 23 atenciones telefónicas en salud mental.
- Acumulados derivados de esos desgloses: 501 terrestres, 4 aéreos, 41 administrativos, 219 regulaciones y 178 atenciones de salud mental.
- SUMICH: 2,875 en enero y 439 en febrero al corte, total 3,314.
- Servicios de otras corporaciones en coordinación con CRUM: 3,900 en enero y 627 en febrero al corte, total 4,527.

### Nota de conciliación
El resumen gráfico muestra 546 servicios DAPH. La hoja `Tablas` presenta 469 servicios totales DAPH en enero y 77 en febrero al corte, acumulado 546. El desglose mensual visible es 431 terrestres + 4 aéreos + 34 administrativos en enero, y 70 terrestres + 0 aéreos + 7 administrativos en febrero. Estos componentes también suman 546. Sin embargo, otra fila rotulada “Total terrestres DAPH” muestra 465 en enero y 77 en febrero; ese rótulo no coincide con la suma estricta de los servicios terrestres (431 y 70) y parece incorporar administrativos. Debe validarse su definición con los responsables del reporte antes de convertirla en indicador oficial. La presentación explicita esta ambigüedad.

La hoja `Datos importados` presenta múltiples bloques de información en paralelo (por ejemplo, sede, tipo de ambulancia, tipo de servicio, motivo, descripción, CIE-10, municipio, jurisdicción, fecha, hora, unidad y otros campos). El rango usado de hoja llega a 177 columnas y 45,518 filas por formato/áreas de hoja; **no se interpreta ese rango como 45,518 servicios ni como 177 campos operativos validados**.

## 3. Procesos y dominios visibles en las fuentes
- Registro de servicios prehospitalarios y traslados.
- Sede y confirmación de sede.
- Tipo de ambulancia (terrestre/aérea).
- Tipo de servicio (emergencia, traslado local, traslado foráneo, operativo/cobertura).
- Motivo de solicitud y descripción del servicio.
- Edad, sexo, derechohabiencia.
- CIE-10 (hasta tres campos en el bloque observado).
- Municipio, jurisdicción y mes.
- Regulación médica y estatus/origen del paciente.
- Servicios SUMICH y de otras corporaciones.
- Atención telefónica en salud mental.
- Actividades, capacitaciones y acciones de prevención vial.
- Reportes semanales, mensuales y resúmenes gráficos.

## 4. Matriz preliminar de complejidad y oportunidad
| Dominio | Oportunidad | Complejidad preliminar | Dependencia/validación pendiente |
|---|---|---|---|
| Catálogos institucionales | Catálogos maestros y listas controladas | Media | Definir dueño, claves, vigencia y equivalencias |
| Captura de servicios | Formularios, campos obligatorios y validaciones | Media-alta | Mapear cada campo, fuente y reglas reales |
| Reportes recurrentes | Tableros y exportaciones automatizadas | Media | Conciliar indicadores y fórmulas actuales |
| Actividades/capacitaciones | Registro estructurado y seguimiento | Media | Confirmar flujo, responsables y campos obligatorios |
| Prevención de accidentes | Captura y analítica por municipio/jurisdicción | Media-alta | Revisar bases y definiciones de cada indicador |
| Regulaciones/atención salud mental | Registro y monitoreo con controles de acceso | Alta | Definir privacidad, clasificación y perfiles autorizados |
| Seguridad y auditoría | Usuarios, roles, bitácora y respaldos | Media-alta | Políticas institucionales, retención y continuidad |
| Migración histórica | Limpieza, homologación y carga inicial | Alta | Calidad, duplicados, relaciones y conciliación |

Clasificación orientativa:
- **Automatización inmediata (tras validar reglas):** catálogos controlados, campos obligatorios, formatos, filtros, exportaciones simples y bitácora básica.
- **Complejidad media:** flujos de aprobación/seguimiento, dashboards, reportes programados, actividades y capacitaciones.
- **Complejidad alta:** migración histórica, conciliación de indicadores, interoperabilidad, reglas clínicas/operativas complejas y datos sensibles.
- **Definición institucional previa:** responsables del dato, indicadores oficiales, retención, acceso a información de salud mental, catálogos autorizados y políticas de corrección.

## 5. Riesgos y restricciones detectables
- El libro reúne varios dominios y reportes en un mismo archivo, lo que exige definir un modelo de datos y propietarios por dominio.
- Hay etiquetas de indicadores similares y cifras que requieren conciliación.
- La calidad y consistencia de los datos históricos debe evaluarse antes de migrarlos.
- Las fuentes muestran información potencialmente sensible (salud, edad, derechohabiencia, diagnósticos); el diseño debe aplicar minimización, acceso por rol y políticas institucionales.
- La presentación no concluye que haya accesos compartidos activos ni que existan incidentes; estos puntos deben verificarse en entrevistas y revisión técnica.

## 6. Identidad ADDV observada
- Azul profundo como color dominante.
- Azul eléctrico/cian para acentos y jerarquía.
- Fondos blancos o muy claros para lectura.
- Lato como tipografía principal y Tahoma como secundaria según la guía.
- Iconografía lineal y geométrica; evitar efectos y rellenos innecesarios.
- Logotipo y sus variantes deben utilizarse desde archivos oficiales; en esta presentación el wordmark es una representación tipográfica porque no se proporcionó un recurso vectorial separado.

## 7. Supuestos de la calculadora
Los valores iniciales (8 personas, 5 horas semanales por persona, $180 MXN/hora, 45% de recuperación, inversión $600,000 MXN y operación mensual $12,000 MXN) son **parámetros demostrativos**, no datos del CRUM ni cotización. La fórmula de capacidad recuperada es:
`personas × horas semanales × 4.33 × porcentaje recuperable × costo por hora`.
El valor anual bruto multiplica el valor mensual por 12. El beneficio neto del primer año resta costo anual de operación e inversión. El ROI simplificado divide ese neto entre inversión. La capacidad laboral recuperada no es necesariamente ahorro financiero directo; solo se convierte en ahorro presupuestal si existe una reducción real de gasto o una reasignación cuantificable.

## 8. Información requerida para cerrar el caso de negocio
1. Número de usuarios y perfiles por proceso.
2. Volúmenes por tipo de registro y frecuencia.
3. Tiempo real por captura, revisión, corrección y reporte.
4. Costos laborales promedio por perfil (o costo institucional por hora).
5. Catálogos oficiales y responsables de actualización.
6. Reglas de negocio y validaciones aprobadas.
7. Indicadores oficiales y fórmula de cálculo de cada uno.
8. Políticas de datos personales, conservación, respaldo y continuidad.
9. Sistemas externos e integraciones requeridas.
10. Alcance y costo de infraestructura y soporte.

## 9. Conclusión
Los materiales permiten identificar una operación con dominios de información diversos y necesidades de consolidación, reporteo y control. La oportunidad consiste en pasar de archivos y reportes aislados a procesos institucionales conectados, con captura estandarizada, validaciones, trazabilidad, analítica y aprendizaje integrado. La inversión, calendario, ahorro y ROI deben definirse después del diagnóstico funcional y técnico.
