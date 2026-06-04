const marval_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);


const heros = marval_heros.concat(dc_heros);
console.log(heros);

const allheros = [...dc_heros, ...marval_heros];
console.log(allheros);

