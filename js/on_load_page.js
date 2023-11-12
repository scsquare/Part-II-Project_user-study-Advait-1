//TODO: sanity checks
//check if they are on the right page
//if not throw them to the right page according to current code

function onLoadPage(){
    var current_page = window.location.pathname.split("/").slice(-1); 
    var working_code=localStorage.getItem("working_code");
    var current_page_code=localStorage.getItem("current_page_code");
    
    if ((current_page_code!=null)&&(working_code!=null)){
        if (current_page_code!=working_code.slice(0,1)){
            alert("WARNING: current page code != working code");
            localStorage.setItem("current_page_code",working_code.slice(0,1));
        }
    }
    
    var should_be_page;
    var should_be_href;
    switch(Number(current_page_code)){
        case 0:
            //uninitialised
            should_be_page="Index.html";
            should_be_href="../Index.html";
            break;
        case 1:
            should_be_page="Intro1.html";
            should_be_href="../sets/Intro1.html";
            break;
        case 2:
            should_be_page="Intro2.html";
            should_be_href="../sets/Intro2.html";
            break;
        case 3:
            should_be_page="AfterTasks.html";
            should_be_href="../sets/AfterTasks.html";
            break;
        default:
            if ((current_page_code>="A")&&(current_page_code<="I")){
                should_be_page="Task1.html";
                should_be_href="../sets/Task1.html";
            }
            else if ((current_page_code>="J")&&(current_page_code<="R")){
                should_be_page="Task2.html";
                should_be_href="../sets/Task2.html";
            }
            else{
                alert("ERROR: Invalid code")
                should_be_page="Index.html";
                should_be_href="../Index.html";
                //TODO: fix weird behaviour on two backwards
            }

    }
    
    if (current_page!=should_be_page){
        alert("WARNING: shoud be at "+should_be_page+" but at "+current_page+". If you used the browser's backwards button please don't!!");
        window.location.href = should_be_href;
    }


    
}

window.onload=onLoadPage();