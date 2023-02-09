let runScripts = ()=>{
    let chart_bars = document.getElementById("chart-bars");
    let icons = document.getElementsByTagName( "i");
    let cards = document.getElementsByClassName( "card");
    console.log( chart_bars );
    console.log("Existenn elementos: i " +icons.length);
    console.log(cards);
}

let modifyText = ()=>{
    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    elementP.innerHTML = "Dinero Actual";

    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 =  listOfH4[0];
    elementH4.innerHTML ='$301k';
}
runScripts();
modifyText();