const people = [
  {
    id: 1,
    name: 'Jamie Williams',
    age: 25,
    place: 'Los Angeles, CA',
    looking: 'Female looking for male',
  },
  {
    id: 2,
    name: 'Adam White',
    age: 50,
    place: 'Los Angeles, CA',
    looking: 'Male looking for femal',
  },
  {
    id: 3,
    name: 'Jessie Pinkman',
    age: 32,
    place: 'New Mexico,',
    looking: 'Male looking for female',
  },
  {
    id: 4,
    name: 'Mary Williams',
    age: 22,
    place: 'NY',
    looking: 'Female looking for male',
  },
];

function* createPersonIterator(people) {
  let index = 0;
  while (true) {
    yield people[index++ % people.length];
  }
}

const iterator = createPersonIterator(people);
const container = document.querySelector('.card');
const name = document.querySelector('h3');
const img = document.querySelector('img');
const profileInfo = document.querySelector('#profile-info');

const next = document.querySelector('#next');

next.addEventListener('click', function () {
  const person = iterator.next().value;
  const random = Math.floor(Math.random() * 100) + 1;
  name.innerText = person.name;
  profileInfo.querySelectorAll('p')[0].innerText = `${person.age} year old`;
  profileInfo.querySelectorAll('p')[1].innerText = `From ${person.place}`;
  profileInfo.querySelectorAll('p')[2].innerText = `${person.looking}`;
  img.src = `https://randomuser.me/api/portraits/thumb/men/${random}.jpg`;
});
