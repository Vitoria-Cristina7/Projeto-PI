function ComponenteVeiculo({ veiculo, setVeiculo }) {
  return (
    <div className="campo">
      <label>Modelo do veículo (opcional)</label>
      <input
        type="text"
        value={veiculo}
        onChange={(e) => setVeiculo(e.target.value)}
        placeholder="Ex.: Fiat Strada"
      />
    </div>
  );
}

export default ComponenteVeiculo;
