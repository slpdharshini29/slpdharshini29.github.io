import books from './assets/books.json' assert { type: "json" };

const container = document.getElementById('data-container');

var category = [...new Set(books.map(obj => obj.category))];
var colors = {
  C: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  E: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
  R: "linear-gradient(45deg,#ff9a9e 0%,#fad0c4 99%,#fad0c4 100%)",
}
var filter = false;
var search = "";
var nextItem = 0;
var current = [];
var loadMore = function () {
  console.log(filter);
  console.log(search);
  current = books.slice(nextItem, nextItem + 10);
  if (filter) {
    current = books.filter(function (item) {
      return item.category === search;
    });
    current = current.slice(nextItem, nextItem + 10);
  }


  for (let i = 0; i < current.length; i++) {
    var bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "bookContainer");
    var bookmark = document.createElement("div");
    bookmark.setAttribute("class", "bookmark");
    var bookCategory = current[i].category.substring(0, 1);
    if (bookCategory === "C") {
      bookmark.style.backgroundImage = colors.C;
    } else if (bookCategory === "E") {
      bookmark.style.backgroundImage = colors.E;
    } else {
      bookmark.style.backgroundImage = colors.R;

    }
    var coverContainer = document.createElement("div");
    coverContainer.setAttribute("class", "coverContainer");
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", current[i].image);
    imgElement.setAttribute("alt", "cover Image ");
    coverContainer.appendChild(imgElement);
    var detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("class", "detailsContainer");
    var pElem1 = document.createElement("p");
    pElem1.setAttribute("class", "title");
    pElem1.innerHTML = current[i].name;
    var pElem2 = document.createElement("p");
    pElem2.setAttribute("class", "description");
    pElem2.innerHTML = current[i].category;
    detailsContainer.appendChild(pElem1);
    detailsContainer.appendChild(pElem2);
    bookContainer.appendChild(bookmark);
    bookContainer.appendChild(coverContainer);
    bookContainer.appendChild(detailsContainer);
    container.appendChild(bookContainer);
  }
  nextItem += 10;
  var noOfBook = document.getElementById("info");
  noOfBook.innerHTML = nextItem + " books";
}

container.addEventListener('scroll', function () {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    loadMore();
  }
});

loadMore();


var actionElement = document.querySelectorAll(".action");
var categoryElement = document.querySelectorAll(".category");

categoryElement[0].addEventListener("click", function () {
  filter = filter ? false : true;
  container.innerHTML = '';

  nextItem = 0;
  search = "Crime-Thriller"
  loadMore();


})
categoryElement[1].addEventListener("click", function () {
  filter = filter ? false : true;
  container.innerHTML = '';

  nextItem = 0;
  search = "Entertainment"
  loadMore();

})
categoryElement[2].addEventListener("click", function () {
  filter = filter ? false : true;
  container.innerHTML = '';

  nextItem = 0;
  search = "Romance"
  loadMore();

})

actionElement[0].addEventListener("click", function () {

  actionElement[0].classList.toggle('active');
});
actionElement[1].addEventListener("click", function () {

  actionElement[1].classList.toggle('active');
});