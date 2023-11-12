function getRankings(){
    var init_code=localStorage.getItem("init_code");
    var rankings=[];
    for (var i=0;i<init_code.length;i++){
        if (init_code[i]>="A"){
            var ranking=localStorage.getItem(init_code[i]);
            rankings.push("{"+init_code[i]+":"+ranking+"}");
        }
    }
    localStorage.setItem("rankings",rankings);

    return rankings;
}

function promptDownload(content){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', "results.txt");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

var resultsText=document.getElementById("results");
var results=(localStorage.getItem("name")).concat(",",localStorage.getItem("beforeTaskQuestions"),",",getRankings(),",",localStorage.getItem("afterTaskQuestions"));
localStorage.setItem("results",results);
resultsText.innerHTML=results;


var promptDownloadButton=document.getElementById("prompt-download");
promptDownloadButton.addEventListener("click",()=>{
    promptDownload(localStorage.getItem("results"));
})