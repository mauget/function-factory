export default function functionThree(args) {
    const { arg1, arg2, arg3 } = { ...args };
    return `Hello from functionThree('${arg1}', '${arg2}', '${arg3}')`;
}
