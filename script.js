let myLeads = [];
const inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ul_list = document.getElementById("unOrderedList");
let paragraph = document.createElement("p");

inputBtn.addEventListener("click", function() {
    if ( inputEl.value != "" && inputEl.value != " ") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        paragraph.textContent = ""; 
        renderLead();
        
    } else {
        paragraph.innerHTML += "Please Entry Something <br>";
        document.body.appendChild(paragraph);
    }
   
})

function renderLead() {
    let listItems = "";
    for ( let i = 0; i < myLeads.length; i++ ) {
        // ul_list.innerHTML += "<li>" + myLeads[i] +  "</li>";
        // use another method instead of doing it with innerHTML.
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ul_list.append(li);
        
        // listItems += "<li><a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target = '_blank' href = '${myLeads[i]}'>  ${myLeads[i]}</a>
            </li> 
        `
    }

    ul_list.innerHTML = listItems;
}