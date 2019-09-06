var textArea=document.getElementById("meddelande");

var okButton=document.getElementById("ok_button");
okButton.addEventListener("click",function()
{
  var userInput=document.getElementById("age").value;
  console.log(userInput);
  if(userInput>66)
  { 
    document.getElementById("meddelande").innerHTML=
    "Du är förgammal";    
    }
    else if(userInput<18)
    {
      document.getElementById("meddelande").innerHTML=
      "Du är förung";     

    }
    else
    {
      document.getElementById("meddelande").innerHTML=
      "Du har rätt ålder";     
    }
})