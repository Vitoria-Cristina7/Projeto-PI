function ComponenteVeiculo({ veiculo, setVeiculo }) {
  return (
    <div className="campo">
      <labe>Modelo do veículo (opcional)</labe>
      <input>
        type="text" value={veiculo} onChange=
        {(e) => setVeiculo(e.target.value)} placeholder="Ex.: Fiat Strada"
      </input>
    </div>
  );
}

export default ComponenteVeiculo;
