const elements = ['word', 25, true, undefined];
console.log(elements.length);

let new_array = elements.map((item) => {
    console.log(item); 
    return item + 1;
})