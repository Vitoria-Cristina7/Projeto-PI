function ComponenteÁlcool({ precoÁlcool, setPrecoÁlcool }) {
  return (
    <section>
      <div className="campo">
        <label>Preço do Álcool (R$)</label>
        <input
          type="number"
          value={precoÁlcool}
          onChange={(e) => setPrecoÁlcool(e.target.value)}
          placeholder="Ex.: 3.49"
        />
      </div>
    </section>
  );
}

export default ComponenteÁlcool;
