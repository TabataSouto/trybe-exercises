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
});
