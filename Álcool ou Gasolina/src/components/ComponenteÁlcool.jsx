function ComponenteÁlcool({precoÁlcool, setPrecoÁlcool}) {
    <section>
        <div>
            <label htmlFor="">Preço do Álcool (R$)</label>
            <input>type="number" value={precoÁlcool}
            onChange={(e) => setPrecoÁlcool(e.target.value)} placeholder="Ex.: 3.49"
            </input>
        </div>
    </section>
}

export default ComponenteÁlcool