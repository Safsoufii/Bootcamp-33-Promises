// Make a GET request to the specified URL
fetch("https://www.affirmations.dev/affirmation")
  // Setup a promise to handle the response after the request is successful
  .then(response => {
    // Extract the text content of the response
    return response.text();
  })
  // Setup another promise to handle the data after the previous promise is resolved
  .then(data => {
    // Log the data (text content of the response) to the console
    console.log(data);
  })
  // Setup an error handling promise to log the error message to the console in case the fetch request fails
  .catch(error => {
    console.log(error);
  });
  
// Explanation for the expected CORS error:
// This script is making a fetch request to a different domain than the one it's running on, 
// which triggers the browser's same-origin policy and results in a CORS error. 
// The server at "https://www.affirmations.dev" is not configured to allow requests.
// This error is expected and can be resolved by either configuring the server to allow the specific origin or by proxy the request through a server that can handle the CORS headers.
