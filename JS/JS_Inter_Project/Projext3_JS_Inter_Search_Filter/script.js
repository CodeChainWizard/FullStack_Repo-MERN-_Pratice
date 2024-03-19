const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtn = document.querySelectorAll(".category-btn");

const filterData = () => {
  const searchValue = searchInput.value.toLowerCase();
  const productItems = document.querySelectorAll(
    ".product-item[data-category]"
  );

  const activeCategory = document.querySelector(".category-btn.active").dataset
    .category;

  productItems.forEach((item) => {
    const productName = item.querySelector("h3").innerText.toLowerCase();
    const category = item.dataset.category;

    if (
      (productName.includes(searchValue) || searchValue == "") &&
      (category === activeCategory || activeCategory === "all")
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

function setCategory(e) {
  categoryBtn.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  filterData();
}

searchBtn.addEventListener("click", filterData);

searchInput.addEventListener("keyup", filterData);

categoryBtn.forEach((btn) => {
  btn.addEventListener("click", setCategory);
});

filterData();
