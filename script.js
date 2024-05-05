let myLeads = ["Uzair", "Ahmad", "Khan", "Lala", "Chacha"];
const inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ul_list = document.getElementById("unOrderedList");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = " ";
})

for ( let i = 0; i < myLeads.length; i++ ) {
    // ul_list.innerHTML += "<li>" + myLeads[i] +  "</li>";
    
    // use another method instead of doing it with innerHTML.

    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ul_list.append(li);
}