const hello = require('./index');

test('retorna mensagem correta', () => {
  expect(hello("WorkShop")).toBe("Hello, Workshop!");
});
