//IIFE
let animales = (() => {
  const urlBase = '/animales.json';

  //funcion asincrona async/await
  const getData = async () => {
    const result = await fetch(urlBase);
    const response = result.json();
    return response;
  };
  return { getData };
})();

export default animales;
// //PROBANDO JSON
// // -------------git---
// const url =
// 'https://raw.githubusercontent.com/latiscool/Animales-Salvajes---LTG/main/animales.json';

// fetch(url)
//   .then((data) => data.json())
//   .then((response) => console.log(response));
