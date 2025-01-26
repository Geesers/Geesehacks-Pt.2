// Handle Login Form Submission

// Mock validation for login
function login() {
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  const passes = JSON.parse(localStorage.getItem("passes")) || [];
  const names = JSON.parse(localStorage.getItem("names")) || [];

  const curemail = document.getElementById("loginEmail").value;
  const curpassword = document.getElementById("loginPassword").value;

  let position = emails.indexOf(curemail);

  if (position === -1) {
    window.alert("Email not found :( Please sign up.");
  } else if (curpassword === passes[position]) {
    window.alert("Login successful! Welcome " + names[position] + "!");
    window.location.href = "test.html";
  } else {
    window.alert("Invalid password.");
  }
}

function signup() {
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  const passes = JSON.parse(localStorage.getItem("passes")) || [];
  const names = JSON.parse(localStorage.getItem("names")) || [];
  const providers = JSON.parse(localStorage.getItem("providers")) || [];

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const username = document.getElementById("signupName").value;
  const provider = document.getElementById("signupProvider").value;

  emails.push(email);
  passes.push(password);
  names.push(username);
  providers.push(provider);

  localStorage.setItem("emails", JSON.stringify(emails));
  localStorage.setItem("passes", JSON.stringify(passes));
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("providers", JSON.stringify(providers));

  window.alert("Signup successful!");
}
