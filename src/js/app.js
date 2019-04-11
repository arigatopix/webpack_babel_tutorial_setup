import { person, sayHello } from './lib';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  return data;
}

getPosts().then(post => console.log(post));

const gogo = () => console.log('gogo');

gogo();

console.log(sayHello('bas'));
console.log(person.name);
