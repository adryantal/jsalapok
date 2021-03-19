
/*segédfüggvények*/
function ID(nev) {
    return document.getElementById(nev);
}



var osszeg = 0;  //globális változó
function beker() {    
    var szamolGomb = ID("szamol");     
    var valtA = document.getElementById("a").value; //bekérjük az adatokat; ()-ben lévő egyezzen meg a name-el
    var valtB = document.getElementById("b").value;
    osszeg = Number(valtA) + Number(valtB); //az üres mező értéke számmá alakítva 0!
    console.log("bekér lefut");
    if (isNaN(osszeg) || document.getElementById("a").value === "" || document.getElementById("b").value === "") {        
        ID("szamol").style.color = "grey"; 
        ID("szamol").style.background = "lightgrey";
        ID("szamol").title = "Számokat adj meg!"; // a title tag-be írjuk ki a megadott szöveget
        szamolGomb.addEventListener("click", hibauzenet, false);
    } else {
        ID("szamol").title = "";
        ID("szamol").style.color = "black";
        ID("szamol").style.background = "pink";
        szamolGomb.addEventListener("click", szamol, false);
    }
    ID("a").addEventListener("input", beker, false);
    ID("b").addEventListener("input", beker, false);   
}


function szamol() {
    if (isNaN(osszeg)){
        hibauzenet();
            } else  {
    ID("szoveg").innerHTML = "Eredmény: <span style='color:orchid'>" + osszeg + "</span>";
} //írja át a HTML-ben a "szoveg"-hez rendelt szöveget
                                                                                            //elem HTML tartalmának megváltoztatása
    console.log("számolra kattintottam");
}


function hibauzenet() {
    ID("szoveg").innerHTML = "<span style='color:orchid'>Hibás beviteli adat(ok)! Próbáld újra, csak számok megadásával!</span>";
}


function szamolFormaz() {
    ID("szamol").style.color = "orchid"; /*a Számol gomb felirata színének megváltoztatása*/
    ID("szamol").style.border = "1px solid orchid";
    ID("szamol").style.background = "lightblue";
}

function szamolFormazLevesz() {
    ID("szamol").style.color = "initial";
}

function inputFormazas() {
    ID("a").classList.add("bevitelimezo"); /*bevitelimezo: a CSS-ben létrehozott stílusosztály, ezt húzzuk rá az "a" ID-jó elemre*/
}

function inputFormazasLe() {
    ID("a").classList.remove("bevitelimezo");
}


function oldalformazas (){
    document.body.style.background = "lightblue url('calculator.png') no-repeat right";
    ID("focim").classList.add("szovegformazas1");
    ID("alcim").classList.add("szovegformazas1");
    ID("uzenet").classList.add("szovegformazas2");
    ID("szoveg").classList.add("szovegformazas2");
    
}

function init() {
    console.log("init függvény");
    oldalformazas();
    beker();
    ID("uzenet").innerHTML = "Helló, ez itt az Init függvény üzenete! :) ";
    // szamolGomb.addEventListener("click", szamol, false); /*ha a Számol gombra kattintok, fusson le a szamol függv.*/
    //szamolGomb.addEventListener("mouseover", szamolFormaz, false); /*ha a Számol gomb fölé viszem az egeret, fusson le a szamolFormáz függv.*/
    //szamolGomb.addEventListener("mouseout", szamolFormazLevesz, false); /*ha a Számol gombról leveszem a kurzort, fusson le a szamolFormazLevesz függv.*/
    // ID("a").addEventListener("focusin",inputFormazas,false); /*ha az "a" textfieldbe belekattintok, alkalmazza az inputFormazas-t*/   
    // ID("a").addEventListener("focusoout",inputFormazasLe,false);

}



window.addEventListener("load", init, false);