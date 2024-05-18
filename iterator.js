const app = {
  nextIndex: 0,
  avengers: ['Captain America', 'Ironman', 'Hulk', 'Thor', 'Black Widow'],
  next: function () {
    if (this.nextIndex < this.avengers.length) {
      return {
        value: this.avengers[this.nextIndex++],
        done: false,
      };
    }
    return {
      done: true,
    };
  },
};

console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());

const app2 = {
  avengers: ['Captain America', 'Ironman', 'Hulk', 'Thor', 'Black Widow'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.avengers.length
          ? { value: this.avengers[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const it = app2[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
