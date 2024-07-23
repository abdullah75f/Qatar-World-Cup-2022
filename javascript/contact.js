//error messages to be displayed
const error_name = document.querySelector(".errorn");
const error_email = document.querySelector(".errore");
const error_comment = document.querySelector(".errorc");


//the input fields


//submit button
const submit_button = document.querySelector(".submit");






submit_button.addEventListener("click",(e)=>{
  e.preventDefault();

  const nnew  = document. getElementById("newDiv");
  if (nnew) {
    nnew.remove();
}
  
   
    
    const nname = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const comment = document.querySelector("#comment").value;

    if( error_name.style.display === "block" || error_email.style.display === "block" || error_comment.style.display === "block"  ){
      error_comment.style.display = "none"
      error_comment.style.display = "none"
      error_comment.style.display = "none"

    }
    
  if( nname === "" && email === "" && comment === "" ){
    error_name.style.display = "block";
    error_email.style.display = "block"
    error_comment.style.display = "block"
    

  }

  else if(nname === "" && email === "" ){
    error_name.style.display = "block";
    error_email.style.display = "block";

  }

  else if(nname === "" && comment === "" ){
    error_name.style.display = "block";
    error_comment.style.display = "block";

  }

  else if(email === "" && comment === "" ){
    error_email.style.display = "block";
    error_comment.style.display = "block";

  }




  else if(nname === "" ){
        error_name.style.display = "block";
        
  }
  else if (email === ""){
     error_email.style.display = "block"
     

  }

  else if(comment === ""){
     error_comment.style.display = "block";
     

  }

  




  else{
      const newDiv = document.createElement("div");
      newDiv.innerHTML = "Thank you!!! we received your feedback.";
      newDiv.id = "newDiv";
      newDiv.style.color = "green";
      newDiv.style.fontSize = "30px";
      submit_button.insertAdjacentElement('afterend', newDiv);


  };

  
  



  

   

});


