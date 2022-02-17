const service = require('./service');

describe('Verificar função que gera um número aleatório', () => {
  test('Teste se a função retorna 10', () => {
    // transforma a função em um mock e passa como retorno dessa função o "10" como padrão
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
  })

  test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('Teste se a função foi chamada, se nova implementação de divisão foi aplicada, e verifica se a aplicação da nova implementação acontece apenas uma vez', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    const div = service.randomNumber(8, 4);

    // testa se a função foi chamada e qual seu retorno;
    expect(div).toBe(2);
    // verifica se a função foi chamada
    expect(service.randomNumber).toHaveBeenCalled();
    // testa se a nova implementação de divisão foi aplicada
    expect(div).toBe(2);
    // testa se a função foi chamda uma única vez;
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
  });
});
