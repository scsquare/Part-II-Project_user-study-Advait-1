function writeResults(){
    alert("hello world");
    //TODO its not writing anything down but hello world is running
    const sortableList = document.querySelector(".sortable-list"); //select the first thing with class .sortable-list
    const items = sortableList.querySelectorAll(".item"); //from the sortableList, select all things with class .item
    const texts = items.querySelectorAll(".text"); //from the sortableList, select all things with class .item
    const spans = texts.innerHTML;

    const data = new Blob ([spans],{ type: "text/plain" });

    const fs=require("fs");
    
    fs.writeFile('../results.txt', "Hello world", (err) => { 
          
        // In case of a error throw err. 
        if (err) alert("something went wrong"); 
    }) 
}

const contButton = document.getElementById("cont");
contButton.addEventListener("click", () => {
    writeResults();
    window.location.href = "../part1/Intro1.html";
}

);

