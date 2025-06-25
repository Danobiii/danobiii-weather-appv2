fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify({
        title: "food",
        body: "jar",
        userId: 1
    }),
    headers: {
        "content-type": "application/json"
    }
})
    .then(response => {
        return response.json();
    })
    .then(post => {
        console.log(post);
    })
    .catch(error => {
        console.log("failed");
    })