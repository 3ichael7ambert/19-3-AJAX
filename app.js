console.log("Let's get this party started!");

////////////
///PART 1///
////////////
// const form = document.querySelector('#search-form');
// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const searchTerm = document.querySelector('#search-input').value;
//   const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
//   const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
//   const response = await axios.get(url);
//   console.log(response.data);
// });


////////////
///PART 2///
////////////
// const form = document.querySelector('#search-form');
// const resultsContainer = document.querySelector('#results-container');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const searchTerm = document.querySelector('#search-input').value;
//   const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
//   const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
//   const response = await axios.get(url);
//   const gifUrl = response.data.data[0].images.downsized.url;
//   const img = document.createElement('img');
//   img.setAttribute('src', gifUrl);
//   resultsContainer.appendChild(img);
// });





////////////
///PART 3///
////////////
const form = document.querySelector('#search-form');
const resultsContainer = document.querySelector('#results-container');
const clearButton = document.querySelector('#clear-button');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = document.querySelector('#search-input').value;
  const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
  const response = await axios.get(url); //response obj
  if (response.data.data.length === 0) {
    alert('No images available.');
    return;
  }
  const gifUrl = response.data.data[0].images.downsized.url; //{response} {data {images {downsized {url}}}}
  const img = document.createElement('img');
  img.setAttribute('src', gifUrl);
  resultsContainer.appendChild(img);
});

clearButton.addEventListener('click', () => {
  resultsContainer.innerHTML = '';
});
