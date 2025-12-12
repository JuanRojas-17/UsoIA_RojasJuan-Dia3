import fs from "fs";
import { encoding_for_model } from "tiktoken";

async function contarTokensArchivo() {
  const encoding = encoding_for_model("gpt-4");

  const texto = fs.readFileSync("libro.txt", "utf-8");

  const tokens = encoding.encode(texto);

  console.log("Cantidad de tokens:", tokens.length);

  const costoPorMilTokens = 0.03;
  const costoFinal = (tokens.length * costoPorMilTokens) / 1000;

  console.log(`Costo estimado del archivo: ${costoFinal.toFixed(4)} USD`);
}

contarTokensArchivo();
