const form = document.querySelector('form');

// Add event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Log the form data to the console
  console.log(formData);
})
;