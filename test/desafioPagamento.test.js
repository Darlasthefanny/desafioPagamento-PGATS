import assert from 'node:assert';
import test from 'node:test';
import ServicoDePagamento from '../src/desafioPagamento.js';

test('ServicoDePagamento - classificar pagamento caro', () => {
  const servico = new ServicoDePagamento();

  servico.pagar('123', 'Empresa A', 150.00);
  const ultimo = servico.consultarUltimoPagamento();

  assert.strictEqual(ultimo.categoria, 'cara');
});

test('ServicoDePagamento - classificar pagamento padrão', () => {
  const servico = new ServicoDePagamento();

  servico.pagar('456', 'Empresa B', 50.00);
  const ultimo = servico.consultarUltimoPagamento();

  assert.strictEqual(ultimo.categoria, 'padrão');
});

test('ServicoDePagamento - retorna último pagamento', () => {
  const servico = new ServicoDePagamento();

  servico.pagar('111', 'Loja 1', 10.00);
  servico.pagar('222', 'Loja 2', 200.00);

  const ultimo = servico.consultarUltimoPagamento();

  assert.strictEqual(ultimo.codigoBarras, '222');
});