function ComponenteResultado({ resultado, veiculo }) {
    if (resultado === null) {
    return <p className="resultado-vazio">Preencha os preços e clique em calcular.</p>;
  }

  return (
    <div className="resultado">
      {veiculo && <p className="resultado-veiculo">Cálculo para: {veiculo}</p>}
      <h2>{resultado.compensaAlcool ? "Vale mais a pena abastecer com ÁLCOOL" : "Vale mais a pena abastecer com GASOLINA"}</h2>
      <p>A razão entre os preços foi de {resultado.razao}%</p>
      <p>Diferença em relação ao limite de 70%: {resultado.diferenca} pontos percentuais</p>
    </div>
  );
}

export default ComponenteResultado;