const dataTypes = new Map ([
    ['power', 2],
    [3, 9],
    [Boolean, true],
    [Array, ['^', '=']]
])

for (let [key, value] of dataTypes.entries()) {
    console.log(`Ключ - ${key}, значение - ${value}`);
}