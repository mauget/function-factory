import {functionFactory} from "./functionFactory";

describe('factory dispatch of code', () => {
    const param = 'a parameter';

    test(`"One" result contains "One" and "${param}"`, () => {
        const result = functionFactory('One', param);

        expect(result.includes('One'));
        expect(result.includes(param));
    });

    test(`"BAD" result contains "BAD", and "not registered" (but not "${param}")`, () => {
        const result = functionFactory('BAD', param);

        expect(result.includes('BAD'));
        expect(!result.includes(param));
        expect(result.includes('not registered'))
    });

});
