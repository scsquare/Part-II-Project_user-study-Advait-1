//this function to be run on every page after intro1

function getCurrentPageCode(){
    var working_code=localStorage.getItem("working_code");
    var current_page_code=working_code[0];
    localStorage.setItem("current_page_code",current_page_code);
}

getCurrentPageCode();