window.addEventListener("load", () => {
    const body = null;
    const method = "GET";
    const url = "http:localhost:1111/test";
    const req = new Request(encodeURI(url), {
        // @ts-ignore
        method: method,
        body: body
    });
    fetch(req)
        .then(res => {
            return res.json();
        })
        .then(data => {
            document.getElementById("result").innerText = JSON.stringify(data);
        })
        .catch(err => {
            console.error(err);
        });
});
