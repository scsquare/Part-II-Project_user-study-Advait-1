function saveAfterTasksQuestions (form) {
    var q1 = form.q1.value;
    var q2 = form.q2.value;
    var q3 = form.q3.value;

    var results="{'q1':'".concat(q1,"'},{'q2':'",q2,"'},{'q3':'",q3,"'}");
    localStorage.setItem("afterTaskQuestions",results);
    window.location.href="../results_download/Results_Download.html";
}


var q2 = document.getElementById("q2");

q2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("questionsButton").click();
  }
});