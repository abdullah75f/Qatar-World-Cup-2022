//error messages to be displayed
const error_name = document.querySelector(".errorn");
const error_email = document.querySelector(".errore");
const error_comment = document.querySelector(".errorc");


//the input fields


//submit button
const submit_button = document.querySelector(".submit");

console.log(submit_button);


submit_button.addEventListener("click",(e)=>{
    e.preventDefault();
    const nname = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const comment = document.querySelector("#comment").value;
    
  if( nname === "" && email === "" && comment === "" ){
    error_name.style.display = "block";
    error_email.style.display = "block"
    error_comment.style.display = "block"

  }
  else if(nname === "" ){
        error_name.style.display = "block";
  }
  else if (email === ""){
     error_email.style.display = "block"

  }

  else if(comment === ""){
     error_comment.style.display = "block"

  }




  else{
    const newDiv = document.createElement("div");
newDiv.innerHTML = "Thank you!!! we received your feedback.";
newDiv.id = "newDiv";
newDiv.style.color = "green";
newDiv.style.fontSize = "30px";
submit_button.insertAdjacentElement('afterend', newDiv);

const form = document.getElementById('myForm');
form.reset();

  };

  

   

});

