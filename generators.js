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
