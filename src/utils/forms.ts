export function update(inputs: any, name: string, newValue: any) {
    return{ ...inputs, [name]: { ...inputs[name], value: newValue } }
}

export function toValues(inputs: any) {
    const data: any = {};

    for (const name in inputs) {
        data[name] = inputs[name].value;
    }

    return data;
}