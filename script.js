let myLeads = [];
const inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ul_list = document.getElementById("unOrderedList");
const paragraph = document.createElement("p");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// if there is any data in localStorage then call render();
if ( leadsFromLocalStorage ) {
    myLeads = [...leadsFromLocalStorage];
    render(myLeads);
}


function render(leads) {
    let listItems = "";
    for ( let i = 0; i < leads.length; i++ ) {
        // ul_list.innerHTML += "<li>" + myLeads[i] +  "</li>";
        // use another method instead of doing it with innerHTML.
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ul_list.append(li);
        
        // listItems += "<li><a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target = '_blank' href = '${leads[i]}'>  ${leads[i]}</a>
            </li> 
        `
    }

    ul_list.innerHTML = listItems;
}



inputBtn.addEventListener("click", function() {
    if ( inputEl.value != "" && inputEl.value != " ") {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        paragraph.textContent = ""; 
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
   
})


// Double Click == dblclick in addEventListener
deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
    inputEl.value = ""
})


tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)
    });
})