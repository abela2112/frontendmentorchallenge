const email = document.querySelector("#email");
const error = document.querySelector(".Error");
const button = document.querySelector(".btn");
const container = document.querySelector(".container");
const form = document.querySelector("form");

function validateEmail(email) {
  let reEmail =
    /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if (!email.match(reEmail)) {
    //alert("Invalid email address");
    return false;
  }

  return true;
}
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  console.log(email.value);
  if (!validateEmail(email.value)) {
    error.innerHTML = `<p>invalid email</p>`;
    error.style.dispaly = "block";
    setTimeout(() => {
      error.classList.remove("error-message");
      email.classList.remove("error-email");
    }, 2000);

    error.classList.add("error-message");
    email.classList.add("error-email");
  } else {
    container.innerHTML = `
    <div class="main-success">
    <div class="image"><img src="./assets/icon-list.svg" /></div>
      <h1 class="title-success">Thanks you for subscribing!</h1>
      <p>
        a confirmation email has been sent to
        <strong>${email.value}</strong> you.Please open it and click the
        button inside to confirm your subscription.
      </p>
<div class="footer">
      <button class="btn" type="submit">Dismiss message</button></div>
    </div>
  `;
  }
});
