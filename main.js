let info = document.querySelector(".info");
let bio = document.querySelector(".bio");
let profile = document.querySelector(".img");
let title = document.querySelector(".title");

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/paul-dantam");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
  let data = JSON.parse(this.responseText);

  title.innerHTML = data.name;

  let infoFill = `
    <div class="fill"><span>Name:</span> ${data.name}</div>
    <div class="fill"><span>Github URL:</span> <a href="${data.html_url}">${data.name}</a></div>
    <div class="fill"><span>Email:</span> pauldantam01@gmail.com</div>
    <div class="fill"><span>Company:</span> ${data.company}</div>
    <div class="fill"><span>Website:</span> <a href="${data.blog}">coolsite.com</a></div>
  `;
  info.innerHTML += infoFill;

  let bioFill = `
  <div class = "bioBorder">${data.bio} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
  `;

  bio.innerHTML += bioFill;

  let imgFill = `
  <img src="${data.avatar_url}">
  `;

  profile.innerHTML += imgFill;
}
