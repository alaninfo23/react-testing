import { sumPositiveNumbers } from './example'

describe('quando os argumentos passados ​​são números positivos', () => {
    test('deve retornar a resposta certa', () =>{
        expect(sumPositiveNumbers(4, 5)).toBe(9);
    });
});

describe('quando um dos argumentos é um número negativo', () =>{
    test('deve lançar um erro', () =>{
    let error;
    try {
        sumPositiveNumbers(-1, 5);
    } catch (err) {
        error = err;
    }
    expect(error).toBeDefined();
    expect(error.message).toBe("One of the numbers is negative");
    });
});