//error messages to be displayed
const error_name = document.querySelector(".errorn");
const error_email = document.querySelector(".errore");
const error_comment = document.querySelector(".errorc");

//the input fields

const nname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");

//submit button
const submit_button = document.querySelector(".submit");

console.log(submit_button);


submit_button.addEventListener("click",(e)=>{
    e.preventDefault();
    

    // if(nname === "" ){
    //     error_name.style.display = "block";
  // }

})

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myForm');

//     form.addEventListener('submit', function (event) {
//         // Prevent the form from submitting
//         event.preventDefault();
//     });
// });