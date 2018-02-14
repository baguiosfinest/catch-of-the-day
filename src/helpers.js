export function rando(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName(){
  const adjectives = ['adorable', 'beautiful', 'elegant',
'fancy','glamorous','plain','grumpy', 'quaint', 'fierce', 'mysterious'];

  const nouns = ['men', 'women', 'children', 'elves', 'mice', 'halves',
'fungi','potatoes','cacti', 'foci','data'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

