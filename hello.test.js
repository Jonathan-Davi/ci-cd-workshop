const hello = require('./index');

test('retorna mensagem correta', () => {
  expect(hello("a")).toBe("Hello, Workshop!");
});
