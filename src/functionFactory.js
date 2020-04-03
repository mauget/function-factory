import functionOne from './dynamic/functionOne';
import functionTwo from './dynamic/functionTwo';
import functionThree from './dynamic/functionThree';
import functionZero from './dynamic/functionZero';

// To add a function: add its import above; then add a line for its name here:
const functionMap = {
    functionOne,
    functionTwo,
    functionThree,
    functionZero,
};

const resolve = (functionName, args) => {
    const fn = functionMap[functionName];
    return fn
        ? fn(args)
        : `Rats! ${functionName} not registered`;
};

export function functionFactory(code, args = {}) {
    return resolve(`function${code}`, args);
}
