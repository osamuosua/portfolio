function subEnter(){
    const i = document.getElementById("textEnter").value;
    
    if(i == "enter" || i == "Enter"){
        window.alert("Proceeding to the next page.");
        window.location.assign("main.html")
    }
    else{
        window.alert("Invalid Input"); 
    }
}