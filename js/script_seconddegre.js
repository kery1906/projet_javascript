function equation() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let delta = Math.sqrt(b*b - 4*a*c);
    if(a==0){
        document.getElementById("resultat").innerHTML = "pas de solution";
    }
    else if(delta>0){
        let x1, x2;
        x1=((-b+delta)/(2*a)).toFixed(2);
        x2=((-b-delta)/(2*a)).toFixed(2);
        console.log("la double solution X1 et X2 =", x1, x2);
        document.getElementById("resultat").innerHTML = " x1= "+x1+ " et x2 = "+ x2;
    }
    else if(delta==0){
        let x=((-b+(delta))/(2*a)).toFixed(2);
        console.log(" la solution unique X=" + x);
        document.getElementById("resultat").innerHTML = "x="+ x;
    }
    else {
        console.log("il ne peut y avoir de solution");
        document.getElementById("resultat").innerHTML = "pas de solution";
    }
    
}
function reinitialiser(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("resultat").innerHTML = "";
}
