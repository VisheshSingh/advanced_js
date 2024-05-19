// Generators are functions that can be paused and resumes
function* generator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

const items = [1, 2, 3, 4, 5];
const it = generator(items);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let i of generator(items)) {
  console.log(i);
}

const nums = [90, 80, 40, 50, 10, 20, 60, 30, 70];
function* extractRandom(arr) {
  let len = arr.length;
  let random = Math.floor(Math.random() * len);
  while (len > 0) {
    let elem = arr.splice(random, 1)[0];
    yield elem;
    len = arr.length;
  }
}

const number = extractRandom(nums);
console.log(number.next());
console.log(number.next());
console.log(number.next());
