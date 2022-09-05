let A1 = "notif-Apps", A2 = "notif-work", A3 = "notif-Discover", A4 = "notif-Market";
let E1 = "app", E2 = "work", E3 = "Discover", E4 = "Market";
let I1 = "notif-notif", I2 = "notif-cloud";


function myFunction() {
    document.getElementById(A1).style.display = "none";
    document.getElementById(E1).style.color = "#f9fafb";
    document.getElementById(E1).style.borderBottom = "2px solid #FFFFFF";
    document.getElementById(E2).style.color = "#f9fafbac";
    document.getElementById(E2).style.borderBottomColor= "transparent";;
    document.getElementById(E3).style.color = "#f9fafbac";
    document.getElementById(E3).style.borderBottomColor= "transparent";;
    document.getElementById(E4).style.color = "#f9fafbac";
    document.getElementById(E4).style.borderBottomColor= "transparent";;

}
function myFunction1() {
    document.getElementById(A2).style.display = "none";
    document.getElementById(E2).style.color = "#f9fafb";
    document.getElementById(E2).style.borderBottom = "2px solid #FFFFFF";
    document.getElementById(E1).style.color = "#f9fafbac";
    document.getElementById(E1).style.borderBottomColor= "transparent";
    document.getElementById(E3).style.color = "#f9fafbac";
    document.getElementById(E3).style.borderBottomColor= "transparent";;
    document.getElementById(E4).style.color = "#f9fafbac";
    document.getElementById(E4).style.borderBottomColor= "transparent";;
}
function myFunction2() {
    document.getElementById(A3).style.display = "none";
    document.getElementById(E3).style.color = "#f9fafb";
    document.getElementById(E3).style.borderBottom = "2px solid #FFFFFF";
    document.getElementById(E1).style.color = "#f9fafbac";
    document.getElementById(E1).style.borderBottomColor= "transparent";;
    document.getElementById(E2).style.color = "#f9fafbac";
    document.getElementById(E2).style.borderBottomColor= "transparent";;
    document.getElementById(E4).style.color = "#f9fafbac";
    document.getElementById(E4).style.borderBottomColor= "transparent";;
}
function myFunction3() {
    document.getElementById(A4).style.display = "none";
    document.getElementById(E4).style.color = "#f9fafb";
    document.getElementById(E4).style.borderBottom = "2px solid #FFFFFF";
    document.getElementById(E1).style.color = "#f9fafbac";
    document.getElementById(E1).style.borderBottomColor= "transparent";;
    document.getElementById(E3).style.color = "#f9fafbac";
    document.getElementById(E3).style.borderBottomColor= "transparent";;
    document.getElementById(E2).style.color = "#f9fafbac";
    document.getElementById(E2).style.borderBottomColor= "transparent";;
}
function icon_notif() {
    document.getElementById(I1).style.display = "none";
}
function cloud() {
    document.getElementById("notif-cloud").style.display = "none";
}
