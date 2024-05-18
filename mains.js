document.addEventListener("DOMContentLoaded", function() {
  const joinWaitlistButton = document.getElementById("join-waitlist-button");
  const waitlistFormContainer = document.getElementById("waitlist-form-container");

  console.log("DOM fully loaded and parsed");

  joinWaitlistButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    console.log("Join waitlist button clicked");
    waitlistFormContainer.style.display = "block"; // Show the form
  });
});
