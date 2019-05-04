function sprawdz()
{
    var liczba = document.getElementById("pole").value;
    
    if (liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba<0) document.getElementById("wynik").innerHTML="ujemna";
    else if (liczba=="" || liczba==" ") document.getElementById("wynik").innerHTML="Napisz jakąś liczbę.";
    else if (liczba==0 && liczba!="") document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="To nie jest liczba. You know nothing, Jon Snow.";
}