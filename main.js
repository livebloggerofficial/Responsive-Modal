const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal .close-btn");
const discountBtn = document.querySelector(".modal .discount-btn");

const createCookie = () => {
  let maxAge = ";max-age=10";
  let path = ";path=/";
  document.cookie = "live-blogger-popup=displayed" + maxAge + path;
};

const displayModal = () => {
  if (document.cookie.indexOf("live-blogger-popup") == -1) {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
    createCookie();
  }
};

setTimeout(() => {
  displayModal();
}, 2000);

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

discountBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});
