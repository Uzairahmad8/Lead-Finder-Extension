let myLeads = [];
const inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const ul_list = document.getElementById("unOrderedList");
const paragraph = document.createElement("p");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// if there is any data in localStorage then call render();
if ( leadsFromLocalStorage ) {
    myLeads = [...leadsFromLocalStorage];
    renderLead();
}

inputBtn.addEventListener("click", function() {
    if ( inputEl.value != "" && inputEl.value != " ") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        paragraph.textContent = ""; 
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLead();
    }
   
})


deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    renderLead();
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