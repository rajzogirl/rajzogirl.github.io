function wykonaj()
{
 var imie = document.getElementById("fname").value;
 var check = document.getElementById("cv");
 
 if (check.checked) 
 var j = "Skontaktujemy się z Tobą jak najszybciej oraz pomożemy w stworzeniu CV."; 
 else
  var j = "Skontaktujemy się z Tobą jak najszybciej.";
 
 document.getElementById("wynik").innerHTML = "Dziękujemy "+imie+" za wypełnienie formularza. "+j+"";
}
function klik(id, foto)
{
document.getElementById('big').src= foto;
zjazd();
}
function najazd(id, foto)
{
document.getElementById(id).src=foto;
}
function zjazd(id, foto)
{
document.getElementById(id).src=foto;
}