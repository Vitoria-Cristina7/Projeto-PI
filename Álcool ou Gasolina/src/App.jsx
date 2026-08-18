import { useState } from "react";
import ComponenteÁlcool from "./components/ComponenteÁlcool";
import ComponenteGasolina from "./components/ComponenteGasolina";
import ComponenteResultado from "./components/ComponenteResultado";
import ComponenteVeiculo from "./components/ComponenteVeiculo";
import "./App.css";
import { calcularCombustivel } from "./logica/calcularCombustivel";

function App() {
  const [precoÁlcool, setPrecoÁlcool] = useState("");
  const [precoGasolina, setPrecoGasolina] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [resultado, setResultado] = useState(null);

  function Calcular() {
    if (precoÁlcool === "" || precoGasolina === "") {
      alert("Informe os dois valores para calcular.");
      return;
    }

    const numeroÁlcool = Number(precoÁlcool);
    const numeroGasolina = Number(precoGasolina);

    const resposta = calcularCombustivel(numeroÁlcool, numeroGasolina);
    setResultado(resposta);
  }

  return (
    <div className="bloco">
      <header className="cabecalho">
        <h1>Álcool ou Gasolina?</h1>
        <p>Descubra qual combustível compensa mais no seu veículo!</p>
      </header>
      <ComponenteVeiculo veiculo={veiculo} setVeiculo={setVeiculo} />
      <ComponenteÁlcool
        precoÁlcool={precoÁlcool}
        setPrecoÁlcool={setPrecoÁlcool}
      />
      <ComponenteGasolina
        precoGasolina={precoGasolina}
        setPrecoGasolina={setPrecoGasolina}
      />

      <button onClick={Calcular}>Calcular</button>

      <ComponenteResultado resultado={resultado} veiculo={veiculo} />
    </div>
  );
}

export default App;
