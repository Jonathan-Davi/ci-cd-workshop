const hello = require('./index');

test('retorna mensagem correta', () => {
  expect(hello("Workshop")).toBe("Hello, Workshop!");
});