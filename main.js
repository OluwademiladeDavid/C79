nameofthestudent=[];
function submit(){
    var name_1=document.getElementById("1").value;
    var name_2=document.getElementById("2").value;
    var name_3=document.getElementById("3").value;
    var name_4=document.getElementById("4").value;


    nameofthestudent.push(name_1);
    nameofthestudent.push(name_2);
    nameofthestudent.push(name_3);
    nameofthestudent.push(name_4);


    console.log( nameofthestudent);


    document.getElementById("display_name").innerHTML=nameofthestudent;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";


}


function sorting()
{
nameofthestudent.sort();
console.log(nameofthestudent);
document.getElementById("display_name").innerHTML=nameofthestudent;
}