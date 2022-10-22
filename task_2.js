let x = false;

switch (x) {
    case (typeof x == 'number'):
        console.log('x - число');
        break;
    case (typeof x == 'string'):
        console.log('x - строка');
        break;
    case (typeof x == 'boolean'):
        console.log('x - логический тип');
        break;
    default:
        console.log('Тип x не определён');
}