const sortableList = document.querySelector(".sortable-list"); //select the first thing with class .sortable-list
const items = sortableList.querySelectorAll(".item"); //from the sortableList, select all things with class .item

items.forEach(function(item){
    item.addEventListener("dragstart", () => {
        //this is needed to make sure the thing you're dragging stays visible
        setTimeout(function(){
            item.classList.add("dragging")
        }, 1); 
    });
    // Removing dragging class from item on dragend event
    item.addEventListener("dragend", function(){
        item.classList.remove("dragging")
    });
});

function updateSortableList(e){
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");

    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Finding the sibling after which the dragging item should be placed
    //nb y-coordinate increases as we go down. weird.

    function checkBelowCursor(sibling){
        return (e.clientY - sortableList.offsetTop <= sibling.offsetTop + sibling.offsetHeight/2);
    }

    let nextSibling = siblings.find(checkBelowCursor);

    // Inserting the dragging item before the found next sibling
    console.log(e.pageY,sortableList.offsetTop,draggingItem.offsetTop,draggingItem.offsetHeight)
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", updateSortableList);
sortableList.addEventListener("dragenter", function (e){
    e.preventDefault();
} );