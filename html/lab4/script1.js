console.log("Script 1: Simulating API request");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log("Fetched posts:", data.slice(0, 3)));
