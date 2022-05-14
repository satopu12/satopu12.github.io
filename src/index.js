console.log('hello world');

const post = document.getElementById("post");
post.addEventListener("click", function () {
    let commentsValue = document.getElementById("comments").value;

    let li = document.createElement("li");
    let text = document.createTextNode(commentsValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);

});