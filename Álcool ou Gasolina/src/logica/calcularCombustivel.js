export function calcularCombustivel(precoAlcool, precoGasolina) {
  const razao = (precoAlcool / precoGasolina) * 100;
  const compensaAlcool = razao <= 70;

  const diferenca = Math.abs(70 - razao);

  return {
    razao: razao.toFixed(1),
    compensaAlcool: compensaAlcool,
    diferenca: diferenca.toFixed(1),
  };
}
