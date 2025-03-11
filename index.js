// Add event listener to the contact form
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Send the form data to a server or API
  console.log('Form submitted!');
});