// Add your code here
function submitData(name, email) {
  const formData = {
    name,
    email,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) =>
      response.json().then((data) => {
        document.body.innerHTML = data.id;
      })
    )
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
}

let name = "Steve";
let email = "steve@steve.com";
const data = submitData(name, email);
console.log(data);
