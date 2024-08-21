
var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-contain");

function addList() {
    // Trim whitespace from input value
    var inputValue = inputBox.value.trim();

    if (inputValue === "") {
        alert("Please Enter Text");
    } else {
        let li = document.createElement("li");
        li.textContent = inputValue; // Use textContent for plain text
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        
        
    }
 // Clear the input box after adding the item
    inputBox.value = "";
}

// Function to handle clicks on list items or spans
function click(e) {
    // Check if the clicked element is an LI
    if (e.target.tagName === "LI") {
        // Toggle the "cheaked" class on the LI element
        e.target.classList.toggle("cheaked");
    }
    // Check if the clicked element is a SPAN
    else if (e.target.tagName === "SPAN") {
        // Remove the parent element of the SPAN (assumed to be an LI)
        const parent = e.target.parentElement;
        if (parent) {
            parent.remove();
        }
    }
}
// 

// Attach the click event handler to the list
document.getElementById("list-contain").addEventListener("click", click);
    

