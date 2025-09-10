<h1>API de Conversión de Unidades</h1>

Este proyecto es una API REST construida con **Node.js** y **Express** que permite realizar conversiones entre diferentes unidades de medida como temperatura y distancia.

---
<h2>configuracion</h2>
<b>puerto:3000</b>

<h2>Características</h2>
<ul>
<li>- Conversión de Celsius a Fahrenheit</li>
<li>- Conversión de Fahrenheit a Celsius</li>
<li>- Conversión de Kilómetros a Millas</li>
<li>- Conversión de Millas a Kilometros</li>
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

<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Ruta</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/convert/celsius-to-fahrenheit/:value</code></td>
      <td>Convierte Celsius → Fahrenheit</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/convert/fahrenheit-to-celsius/:value</code></td>
      <td>Convierte Fahrenheit → Celsius</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/convert/km-to-miles/:value</code></td>
      <td>Convierte Kilómetros → Millas</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/convert/miles-to-km/:value</code></td>
      <td>Convierte Millas → Kilómetros</td>
    </tr>
  </tbody>
</table>

</div>



