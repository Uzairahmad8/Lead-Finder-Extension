let myLeads = ["hekki", "ahahah"];
const inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let unOrderedList = document.getElementById("unOrderedList");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = " ";
})

// for ( let i = 0; i < myLeads.length; i++ ) {
//    unOrderedList.innerHTML += "<li>" + myLeads[i] +  "</li>";
// }