console.log("hello world");

const btn = document.querySelector(".button");


btn.addEventListener("click", (e) => {
  
  e.preventDefault();
  const username = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  console.log(email, username);
})