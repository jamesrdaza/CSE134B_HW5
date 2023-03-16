let id = document.querySelector("#id");
let articleName = document.querySelector("#articleName");
let articleBody = document.querySelector("#articleBody");
let output = document.querySelector("output");

let getBtn = document.querySelector("#getBtn");
let postBtn = document.querySelector("#postBtn");
let putBtn = document.querySelector("#putBtn");
let deleteBtn = document.querySelector("#deleteBtn");

getBtn.addEventListener("click", () => {
    fetch("https://httpbin.org/get", {
        method: "GET",
    }).then((res) => {
        res.json().then((data) => {
            output.value = JSON.stringify(data);
        })
    });
});

postBtn.addEventListener("click", () => {
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({ id: id.value, article_name: articleName.value, article_body: articleBody.value })
    }).then((res) => {
        res.json().then((data) => {
            output.value = JSON.stringify(data);
        })
    });
});

putBtn.addEventListener("click", () => {
    fetch("https://httpbin.org/put", {
        method: "PUT",
        body: JSON.stringify({ id: id.value, article_name: articleName.value, article_body: articleBody.value })
    }).then((res) => {
        res.json().then((data) => {
            output.value = JSON.stringify(data);
        })
    });
});

deleteBtn.addEventListener("click", () => {
    fetch("https://httpbin.org/delete", {
        method: "DELETE",
        body: JSON.stringify({ id: id.value, article_name: articleName.value, article_body: articleBody.value })
    }).then((res) => {
        res.json().then((data) => {
            output.value = JSON.stringify(data);
        })
    });
});