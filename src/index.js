const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.children[1].value);
    const input = document.querySelector('input#searchByID');
    console.log(input.value);
    BASE_URL = `http://localhost:3000/movies/${input.value}`
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerText = data.title;
      summary.innerText = data.summary;
      // console.log(data);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);