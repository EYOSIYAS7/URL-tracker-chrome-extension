let lead = [];

const inputF = document.getElementById("inputEl");

const saves = document.querySelector("#leads");
const savebtn = document.querySelector("#buttonEl");
const deleteBtn = document.querySelector("#deleteEl");
const tabBtn = document.querySelector("#tabsEl");
let leadsFls = "";
leadsFls = JSON.parse(localStorage.getItem("myleads")); // this is now an array

if (leadsFls) {
  lead = leadsFls;
  displayleads(lead); // passing the array is argument
}
function displayleads(anylead) {
  // anylead is just a parameter that holds the value of the array
  let listitem = "";
  for (let index = 0; index < anylead.length; index++) {
    // templet strings
    listitem += `<li > 
    <a href='${anylead[index]}' target ='_blank'>${anylead[index]}</a>
    </li> `;
  }
  saves.innerHTML = listitem;
}

tabBtn.addEventListener("click", function savetab(params) {
  // to get current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    lead.push(tabs[0].url);
    localStorage.setItem("myleads", JSON.stringify(lead));
    displayleads(lead);
  });
});

savebtn.addEventListener("click", function save() {
  lead.push(inputF.value);
  inputF.value = "";
  localStorage.setItem("myleads", JSON.stringify(lead));

  displayleads(lead);
});

deleteBtn.addEventListener("click", function (params) {
  localStorage.clear();
  lead = [];
  saves.innerHTML = " ";
});

var selection = window.getSelection();
console.log(selection.value);
