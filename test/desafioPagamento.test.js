import assert from 'node:assert';
import ServicoDePagamento from '../src/desafioPagamento.js';

describe('Testes do ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  it('Deve classificar como "cara" um pagamento acima de 100.00', () => {
    servico.pagar('123', 'Empresa A', 150.00);
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo.categoria, 'cara');
  });

  it('Deve classificar como "padrão" um pagamento de 100.00 ou menos', () => {
    servico.pagar('456', 'Empresa B', 50.00);
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo.categoria, 'padrão');
  });

  it('Deve retornar exatamente o último pagamento realizado', () => {
    servico.pagar('111', 'Loja 1', 10.00);
    servico.pagar('222', 'Loja 2', 200.00);
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo.codigoBarras, '222');
  });
});
