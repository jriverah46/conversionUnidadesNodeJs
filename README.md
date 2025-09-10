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

<h2>Rutas</h2>
| Método | Ruta                                  | Descripción                    |
| ------ | --------------------------------------| ------------------------------ |
| GET    | /convert/celsius-to-fahrenheit/:value | Convierte Celsius → Fahrenheit |
| GET    | /convert/fahrenheit-to-celsius/:value | Convierte Fahrenheit → Celsius |
| GET    | /convert/km-to-miles/:value           | Convierte Kilómetros → Millas  |
| GET    | /convert/miles-to-km/:value           | Convierte Millas → Kilometros  |


