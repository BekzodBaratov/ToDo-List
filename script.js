const addList = document.querySelector(".addList");
const inpBtn = document.querySelector(".inpBtn");
const inpKiruvchi = document.querySelector(".inpKiruvchi");
const deleteBtn = document.querySelector(".deleteBtn");
let div = document.querySelector(".div");

let arrInp = [];

let ekrangaChiqarish = function (obj) {
  let zur = `
  <div class="element flex">
    <p>${obj}</p>
    <a class="deleteBtn" href="#">Delete</a>
  </div>`;
  addList.insertAdjacentHTML("afterbegin", zur);
};

// div.addEventListener("click", (e) => {
//   if (e.target == deleteBtn) {
//     div.textContent = "";
//     console.log("salom");
//   }
// });

inpBtn.addEventListener("click", () => {
  addList.innerHTML = "";
  arrInp.push(inpKiruvchi.value);

  arrInp.forEach((el) => {
    ekrangaChiqarish(el);
  });
  inpKiruvchi.value = "";

  console.log(arrInp);
  if (addList.children.length) {
    document.querySelector(".element").addEventListener("click", function (e) {
      console.log(e.target.getAttribute("class"));
      if (e.target.getAttribute("class") == "deleteBtn") {
        console.log(e);
        e.target.parentElement.remove();
      }
    });
  }
});
console.log(addList.children.length);
