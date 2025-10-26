const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollToDivProject");
  const targetDiv = document.getElementById("targetDivProject");
  const scrollButtonContact = document.getElementById("scrollToDivContact");
  const targetDivContact = document.getElementById("targetDivContact");

  scrollButton.addEventListener("click", function () {
    targetDiv.scrollIntoView({
      behavior: "smooth", // Makes the scroll animation smooth
      block: "start", // Aligns the top of the element with the top of the scroll area
    });
  });

  scrollButtonContact.addEventListener("click", function () {
    targetDivContact.scrollIntoView({
      behavior: "smooth", // Makes the scroll animation smooth
      block: "start", // Aligns the top of the element with the top of the scroll area
    });
  });
});
