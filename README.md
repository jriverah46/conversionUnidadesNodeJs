<h1>API de Conversión de Unidades</h1>

Este proyecto es una API REST construida con **Node.js** y **Express** que permite realizar conversiones entre diferentes unidades de medida como temperatura y distancia.

---

<h2>Características</h2>
<ul>
<li>- Conversión de Celsius a Fahrenheit</li>
<li>- Conversión de Fahrenheit a Celsius</li>
<li>- Conversión de Kilómetros a Millas</li>
</ul>

<ol>
  <h2>Instalación</h2>
  <li>git clone https://github.com/jriverah46/conversionUnidadesNodeJs.git</li>
  <li>npm install</li>
</ol>

<ul>
  <h2>comandos</h2>
  <li>npm run dev</li>
  <li>npm start</li>
</ul>



<div style="overflow-x:auto;">
  <h2>Rutas</h2>
  <table role="table" aria-label="Rutas de la API de conversión" style="border-collapse:collapse; width:100%; max-width:900px; margin:16px 0; font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;">
    <caption style="caption-side:top; text-align:left; font-weight:600; margin-bottom:8px;">Rutas disponibles</caption>
    <thead>
      <tr>
        <th scope="col" style="text-align:left; padding:10px 12px; border-bottom:2px solid #e6e6e6;">Método</th>
        <th scope="col" style="text-align:left; padding:10px 12px; border-bottom:2px solid #e6e6e6;">Ruta</th>
        <th scope="col" style="text-align:left; padding:10px 12px; border-bottom:2px solid #e6e6e6;">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2; white-space:nowrap;">GET</td>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2; color:#0b63d6; font-family:monospace;">/convert/celsius-to-fahrenheit/:value</td>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2;">Convierte Celsius → Fahrenheit</td>
      </tr>

      <tr>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2; white-space:nowrap;">GET</td>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2; color:#0b63d6; font-family:monospace;">/convert/fahrenheit-to-celsius/:value</td>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2;">Convierte Fahrenheit → Celsius</td>
      </tr>

      <tr>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2; white-space:nowrap;">GET</td>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2; color:#0b63d6; font-family:monospace;">/convert/km-to-miles/:value</td>
        <td style="padding:10px 12px; border-bottom:1px solid #f2f2f2;">Convierte Kilómetros → Millas</td>
      </tr>

      <tr>
        <td style="padding:10px 12px; white-space:nowrap;">GET</td>
        <td style="padding:10px 12px; color:#0b63d6; font-family:monospace;">/convert/miles-to-km/:value</td>
        <td style="padding:10px 12px;">Convierte Millas → Kilómetros</td>
      </tr>
    </tbody>
  </table>
</div>



