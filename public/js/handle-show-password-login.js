document.addEventListener("DOMContentLoaded", () => {
  const eyeIcon = document.querySelector(".eye");
  const inputPassword = document.getElementById("password");

  if (eyeIcon && inputPassword) {
    eyeIcon.addEventListener("click", () => {
      const isText = inputPassword.type === "text";
      inputPassword.type = isText ? "password" : "text";

      eyeIcon.classList.toggle("fa-eye-slash");
      eyeIcon.classList.toggle("fa-eye");
    });
  }
});
