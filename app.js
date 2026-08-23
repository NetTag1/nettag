const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const tag = document.getElementById("tag").value.trim().toLowerCase();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  if (!name || !tag || !email) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  const profiles = JSON.parse(localStorage.getItem("nettagProfiles") || "{}");

  if (profiles[tag]) {
    message.textContent = "That NetTag already exists.";
    return;
  }

  profiles[tag] = {
    name: name,
    tag: tag,
    email: email
  };

  localStorage.setItem("nettagProfiles", JSON.stringify(profiles));

  message.textContent = "Your NetTag profile was created successfully!";

  signupForm.reset();
});

signinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const tag = document.getElementById("loginTag").value.trim().toLowerCase();
  const message = document.getElementById("loginMessage");

  const profiles = JSON.parse(localStorage.getItem("nettagProfiles") || "{}");

  if (!profiles[tag]) {
    message.textContent = "NetTag profile not found.";
    return;
  }

  message.textContent = `Welcome back, ${profiles[tag].name}!`;
});
