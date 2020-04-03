export default function functionTwo(args) {
    const { arg1, arg2, arg3 } = { ...args };
    return `Hello from functionTwo('${arg1}', '${arg2}', '${arg3}')`;
}
