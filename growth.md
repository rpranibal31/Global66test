# Growth Thinking --- Landing /precio/\*

## 1. Metas técnicas y de negocio

Desde una perspectiva de producto, la página `/precio/*` cumple un rol
de **entrada al funnel**. El objetivo no es solo mostrar el tipo de
cambio, sino acompañar una decisión financiera.

**Metas principales:**

-   **Adquisición (SEO):**
    -   Atraer tráfico orgánico para búsquedas como *precio dólar*,
        *USD/CLP*, *valor dólar hoy*.
    -   Medir impresiones, CTR y posición por divisa.
-   **Activación:**
    -   Que el usuario pruebe el producto (crear cuenta, iniciar envío o
        cotización).
    -   CTR hacia CTA principal desde el hero.
-   **Confianza de marca:**
    -   Mostrar información clara, actualizada y confiable.
    -   El precio funciona como referencia para validar que Global66 es
        competitivo.
-   **Retención / Remarketing:**
    -   Captura temprana mediante email, notificaciones o app install
        para usuarios que aún no convierten.

En resumen: **SEO → Confianza → Acción → Retención**.

------------------------------------------------------------------------

## 2. Caída del 20% del tráfico orgánico en CLP (plan 72h)

Mi enfoque sería tratarlo como un incidente técnico-producto.

### Primeras horas (diagnóstico rápido)

1.  Validar estado del sitio y servidores.
2.  Revisar si hubo cambios recientes en código, deploy o
    infraestructura.
3.  Confirmar indexación y performance usando Search Console y métricas
    técnicas.

### 24 horas

-   Analizar si la caída es ranking o CTR.
-   Comparar SERP con competidores.
-   Revisar Core Web Vitals y tiempos SSR.
-   Si hubo cambios relevantes → rollback preventivo.

### 72 horas

-   Ajustar metadata y contenido según intención de búsqueda.
-   Mejorar señales de confianza y frescura del contenido.
-   Escalar si el origen es externo (Google update, marketing o
    infraestructura).

El objetivo es priorizar verificaciones rápidas antes de análisis
complejos.

------------------------------------------------------------------------

## 3. Mejoras de velocidad sin sacrificar SEO

1.  **Optimización de contenido**
    -   Reducir peso de imágenes y assets.
    -   Priorizar recursos críticos del hero.
2.  **Reducción de JavaScript**
    -   Revisar dependencias innecesarias.
    -   Mantener bundle liviano y evitar lógica cliente innecesaria.
3.  **Estrategia SSR vs CSR**
    -   Mantener datos críticos renderizados en SSR.
    -   Evitar mover lógica SEO relevante al cliente.
4.  **Optimización backend**
    -   Mejorar tiempos de respuesta API y capacidad del servidor.
    -   Evaluar caching corto para tasas de cambio.

------------------------------------------------------------------------

## 4. Hipótesis de mejora de conversión del Hero

El usuario que consulta el dólar normalmente busca **tomar una decisión
financiera** (dónde cambiar dinero, viajar o enviar fondos).

### Hipótesis A

Mostrar explícitamente la ventaja competitiva: \> "Tenemos uno de los
mejores tipos de cambio del mercado".

**Test:** comparar CTR hacia registro o acción financiera.

### Hipótesis B

Capturar usuarios que aún no están listos para convertir: - Alertas de
precio - Email capture - Instalación de app

**Test:** A/B entre hero informativo vs hero orientado a acción.

Antes de iterar, utilizaría mapas de calor para validar atención real
sobre el hero.

------------------------------------------------------------------------

## 5. Tiempo y uso de IA

-   **Tiempo estimado:** \~4 horas.
-   Viniendo principalmente del ecosistema React, el desafío implicó
    adaptación a Nuxt 2.
-   IA (Copilot / asistentes) fue utilizada como **acelerador técnico**:
    -   comprensión rápida del framework,
    -   conceptos SSR/SEO,
    -   generación de boilerplate.

La implementación, decisiones técnicas y arquitectura fueron guiadas por
experiencia previa en desarrollo frontend.

------------------------------------------------------------------------

**Enfoque general:**\
Combinar experiencia frontend con interés actual en performance y SEO,
entendiendo que una landing financiera no solo debe renderizar rápido,
sino **generar confianza y conversión**.
