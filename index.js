let text_layer = document.getElementById("text_layer");
let data = [
  { id: "21", text: "hi there" },
  { id: "20", text: "leave a note" },
  { id: "15", text: "leave a note" },
];
let tb = document.getElementById("tb");
tb.setAttribute("cellpadding", "0");
tb.setAttribute("cellspacing", "0");
let spotIcon = document.createElement("i");

// textarea.addEventListener("keydown", autosize);
// function autosize() {
//   var el = this;
//   setTimeout(function () {
//     el.style.cssText = "height:auto; padding:0";
//     el.style.cssText = "height:" + el.scrollHeight + "px";
//   }, 0);
// }
let closeIcon = document.createElement("span");
let holder = document.createElement("div");
closeIcon.setAttribute("id", "close");
let textarea = document.createElement("textarea");
closeIcon.innerHTML = `<i id="closeIcon" class="fas fa-times"></i>`;
holder.classList.add("holder");

let spot = document.createElement("i");
spot.className = "fas";
spot.className += " fa-map-marker-alt";
spot.setAttribute("id", "spot");

for (var i = 0; i < 70; i++) {
  let y = document.createElement("tr");
  for (var j = 0; j < 101; j++) {
    let parentDiv = document.createElement("div");
    let x = document.createElement("td");
    holder.setAttribute("id", `${i}${j}`);
    x.setAttribute("border", "0");
    parentDiv.style.width = "6px";
    parentDiv.style.height = "6px";
    parentDiv.style.border = "1px solid transparent";
    parentDiv.setAttribute("id", `${i}${j}`);

    x.appendChild(parentDiv);
    y.appendChild(x);

    parentDiv.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    parentDiv.addEventListener("click", (event) => {
      holder.style.visibility = "visible";
    });
    parentDiv.addEventListener("click", (event) => {
      if (event.target.id === "closeIcon") {
        holder.style.visibility = "hidden";
      }
    });
    parentDiv.addEventListener("drop", (event) => {
      holder.style.visibility = "hidden";

      holder.appendChild(closeIcon);
      holder.appendChild(textarea);
      spot.onmouseenter = () => {
        holder.style.visibility = "visible";
      };

      spot.appendChild(holder);
      parentDiv.appendChild(spot);

      // parentDiv.appendChild(spot.cloneNode(true));

      //show();
      //push new item to the data array
      data.push({ id: event.target.id, text: "" });
      // console.log(parentDiv, data);
    });
  }
  tb.appendChild(y);
}
// function show() {
//   for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     spot.appendChild(holder);
//     let post = document.getElementById(`${element.id}`);
//     post.appendChild(spot.cloneNode(true));

//     console.log("first and last", element);
//   }
// }
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  spot.appendChild(holder);
  let post = document.getElementById(`${element.id}`);
  post.appendChild(spot.cloneNode(true));
  // post.addEventListener("click", () => {
  //   holder.style.visibility = "visible";
  // });
  // post.addEventListener("click", (event) => {
  //   console.log(event.target.id);
  //   if (event.target.id === "closeIcon") {
  //     holder.style.visibility = "hidden";
  //     console.log(event.target.id);
  //   }
  // });
}
