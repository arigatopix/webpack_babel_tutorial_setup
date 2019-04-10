async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  return data;
}

getPosts().then(post => console.log(post));

import { person, sayHello } from './lib';

const gogo = () => console.log('gogo');

gogo();

console.log(sayHello('bas'));
console.log(person.name);
