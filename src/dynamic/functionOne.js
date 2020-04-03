export default function functionOne(args) {
    const { arg1, arg2, arg3 } = { ...args };
    return `Hello from functionOne('${arg1}', '${arg2}', '${arg3}')`;
}
