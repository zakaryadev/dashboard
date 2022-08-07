"use strict";
// Selectors
const Window = document.querySelector(".window");
const closeBtn = document.querySelector(".close");
const ITems = document.querySelector(".navbar-items");
const navbarItems = document.querySelectorAll(".navbar-item");
const Icon = document.querySelector(".icon");
const scaleBtn = document.querySelector(".yellow");
const mainItems = document.querySelectorAll(".dashboard-content__main-main");
const usersInfo = document.querySelectorAll(".users-info");
const transaction = document.querySelector(".transaction");

// Event listeners
closeBtn.addEventListener("click", closebtn);
ITems.addEventListener("click", showHideFunction);
Icon.addEventListener("dblclick", openBtn);

// Functions

// Tab function
function hidetabContent() {
  mainItems.forEach((item) => {
    item.style.display = "none";
    item.classList.remove("open");
  });
  navbarItems.forEach((item) => {
    item.classList.remove("navbar-item__active");
    item.classList.remove("hoverFX");
  });
}

function showtabContent(i = 0) {
  mainItems[i].classList.add("open");
  mainItems[i].style.display = "block";
  navbarItems[i].classList.add("navbar-item__active");
  navbarItems[i].classList.toggle("hoverFX");
}

function showHideFunction(event) {
  const target = event.target;
  if (target && target.classList.contains("navbar-item")) {
    navbarItems.forEach((item, idx) => {
      if (target == item) {
        hidetabContent();
        showtabContent(idx);
      }
    });
  }
}

hidetabContent();
showtabContent();
// Tab function

// Close window btn
function closebtn() {
  Window.classList.remove("open");
  Window.classList.add("clos");
  setTimeout(() => {
    Window.style.display = "none";
  }, 180);
}
// Close window btn

// Open window btn
function openBtn() {
  Window.classList.remove("clos");
  setTimeout(() => {
    Window.classList.add("open");
    setTimeout(() => {
      Window.style.display = "block";
    }, 50);
  }, 100);
}
// Open window btn
Window.addEventListener("mouseenter", () => {});
// Functions

// Machine user's
let count = 0;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((json) =>
    json.forEach((item) => {
      count++;
      if (count < 100) {
        usersInfo.forEach(Users => {
          Users.innerHTML += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
          </tr>
          `;
        })
      }
    })
  );
// Machine user's

// Transaction list
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((json) =>
    json.forEach((item) => {
      count++;
      if (count < 100) {
        transaction.innerHTML += `
          <div class="main-card">
          <div class="main-card__header">
            <div class="main-card__header-name">
              <i class="fi-rr-money"></i>
              <strong style="font-weight: 500;font-size: 14px;">${item.name}</strong>
            </div>
            <i class="fi-rr-arrow-small-up"></i>
          </div>
          <div class="main-card__info">
            <span>Transaction</span>
            <strong>${11985 * item.id} $</strong>
          </div>
        </div>
        `;
      }
    })
  );
// Transaction list
