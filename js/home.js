document.querySelector(".img-nabar").addEventListener("click", () => {
  document.querySelector(".click_icon").classList.toggle("hidden");
});

document.querySelector(".button_back").addEventListener("click", () => {
  console.log(document.querySelector(".button_back"));
  console.log(
    document.querySelector(".fa-arrow-left").classList.toggle("fa-bars")
  );

  document.querySelector(".fa-arrow-left").classList.toggle("fa-bars");
  console.log(document.querySelector(".button_back"));
});

var listItem = document.querySelectorAll(".item");
var contentMobie = document.querySelector(".content-mobile");
document.querySelector(".button_back").addEventListener("click", () => {
  listItem.forEach((i) => i.classList.toggle("hidden"));
  contentMobie.classList.toggle("content-mobile");
});

var listColor = document.querySelectorAll(".left li");
var listOrder =document.querySelectorAll('.order');


var item =localStorage.getItem('key')?localStorage.getItem('key'):0;


listColor[item].style.color = "red";
listOrder[item].classList.remove('hidden');
listColor.forEach((i, index) =>
  i.addEventListener("click", () => {
    listColor.forEach((i) => (i.style.color = "white"));
    i.style.color = "red";
    listOrder.forEach(i => i.classList.add('hidden'));
    listOrder[index].classList.remove('hidden');
    localStorage.setItem('key',index);
  })
);

// https://www.flaticon.com/free-icon/dinner-table_3034243


