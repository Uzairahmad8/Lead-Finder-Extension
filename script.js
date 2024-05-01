let myLeads = ["hekki", "ahahah"];
let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let unOrderedList = document.getElementById("unorderedList");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
})

for ( let i = 0; i < myLeads.length; i++ ) {
   unOrderedList.innerHTML += "<li>" + myLeads[i] +  "</li>";
}