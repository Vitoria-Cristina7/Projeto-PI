function ComponenteGasolina({ precoGasolina, setPrecoGasolina }) {
  return (
    <div className="campo">
      <label>Preço da Gasolina (R$)</label>
      <input>
        type="number" value={precoGasolina} onChange=
        {(e) => setPrecoGasolina(e.target.value)} placeholder="Ex. 5.29
      </input>
    </div>
  );
}

export default ComponenteGasolina;
