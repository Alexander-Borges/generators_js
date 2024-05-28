// A generator is an iterable object created by using a generator function.
function* genNumbers(count) {
    for (let i=0;i<count;i++){
        yield i;
    }   
}

function* generatedNumbers(count){
    const value = yield 0;
    yield value + 3;
}

const generator = genNumbers(3);
const genzzz = generatedNumbers(3);

for(value of generator){
    console.log(value);
}

console.log(genzzz.next(5));
console.log();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());