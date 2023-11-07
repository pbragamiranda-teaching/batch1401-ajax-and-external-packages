import Swal from 'sweetalert2';

const url = "https://api.github.com/users/dhh"

// 1. Need to listen to the submit
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // 2. Grab the info that was typed
  const userEmail = document.getElementById("email").value
  const userPassword = document.getElementById("password").value

  console.log(userEmail);
  console.log(userPassword);

  // 3. Make the post request
  const requestDetails = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, password: userPassword })
  }

  console.log(requestDetails);
  // HANDLING THE RESPONSE
  fetch("https://reqres.in/api/register", requestDetails)
    .then((response) => {
    // .then((data) => {
      // 4. Check the response
      // console.log(data);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({ title: 'Success', text: 'You are connected', icon: 'success' })
      } else {
        Swal.fire({ title: 'Error!', text: 'Oups! Something went wrong', icon: 'error' })
      }
    })

  // FETCHING THE DATA
  // fetch("https://reqres.in/api/register", requestDetails)
  //   .then(response => response.json())
  //     .then((data) => {
  //     // 4. Check the response
  //     console.log(data);
  //   })
})


