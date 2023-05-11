function add(a : number, b : number) {
    return a+b
}
console.log(add(99, 5));



let array =['apple', 'banana'];

console.log(array);

array.push("orange");

console.log(array)


let mixed = ["Sakib", 36, false];

console.log(mixed);

mixed.push(true)

console.log(mixed);

mixed.push(100);

console.log(mixed)

mixed.push({
    playerName: "kalachan"
})

console.log(mixed);


let person = {
    name: "sakib",
    age: 34,
    isCaptain: true,
}

console.log(person);

person.age = 100;

console.log(person);


let n : number;

n = 25;
console.log(n)


let s: (string | number | boolean)[] = [];

s.push( 25, 25, "lomana", false);

console.log(s);

// Object

let y: {
    name: string,
    age: number,
    adult: boolean,
}
y = {
    name: "abdul Kalam",
    age: 66,
    adult: true
}

console.log(y);


let q: any;

q =58;

console.log(q);
q= "amin";

console.log(q)

let w: any[] = [];

w.push("galagali");

console.log(w);

w.push(98);
console.log(w);

w.push(true);

console.log(w);

let e: {
    name: any,
    age: any,
}

e = {
    name: "kamal",
    age: "hbscvsd",
}

console.log(e)