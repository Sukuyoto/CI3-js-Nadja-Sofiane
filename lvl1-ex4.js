let Data1 = prompt("Base du triangle");
let Data2 = prompt("hauteur du triangle");
let calcul = Number(Data1)
let calcul2 = Number(Data2)
function sum (calcul, calcul2) {
    return (calcul * calcul2) /2 ;
}

let result = sum (calcul,calcul2);
alert(result);