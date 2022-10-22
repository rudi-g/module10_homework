let input = prompt('Введите число');
input = +input;

if (typeof input == 'number' && !isNaN(input)) {
    if (input % 2 == 0) {
        console.log('Это четное число');
    } else {
        console.log('Это нечетное число');
    }
} else {
    console.log('Упс, кажется, вы ошиблись!');
}
