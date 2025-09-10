const express = require("express");
const app = express();
const converterRoutes = require("./routes/converterRoutes");

app.listen(3000, () => console.log("running on port 3000"));
app.use(express.json());

app.use("/convert", converterRoutes);


app.use((req,res)=>{res.send("ingrese ruta valida")})