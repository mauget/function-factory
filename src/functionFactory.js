import functionOne from './dynamic/functionOne';
import functionTwo from './dynamic/functionTwo';
import functionThree from './dynamic/functionThree';

const dispatchFunction = (functionNAme, param) => {
    // To add a function: add its import above; then add a line for its name here:
    const functionMap = {
        functionOne,
        functionTwo,
        functionThree,
    };
    const fn = functionMap[functionNAme];
    return fn ? fn(param) : `Rats! ${functionNAme} not registered`;
};

export function functionFactory(code, param) {
    return dispatchFunction(`function${code}`, param);
}
