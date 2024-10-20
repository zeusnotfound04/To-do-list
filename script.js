let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let addBtn = document.getElementById("add");

addBtn.addEventListener("click" , function (){
    if(inputBox.value === ""){
        alert("Kuch Likh toh sahi bhayyy!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},  false);
