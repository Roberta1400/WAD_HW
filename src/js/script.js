document.addEventListener("DOMContentLoaded", function () {
    var imageButton = document.getElementById("imageButton");
    var dropdownContent = document.getElementById("myDropdown");

    // Toggle the dropdown when the image button is clicked
    imageButton.addEventListener("click", function(e) {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown when clicking outside
    window.addEventListener("click", function(event) {
        if (event.target !== imageButton && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

//const binID = '6543ea6354105e766fca8c48';
//const binVersion = 'latest';
//const apiKey = '$2a$10$96ItLli6GmLKcQ79hYBX..Sp6qKE9jKKT8VacpSidqrZVp2BC.yNC';

//const jsonBinURL = `https://api.jsonbin.io/v3/b/${binID}/${binVersion}`;
//
//const req = new XMLHttpRequest();
//
//req.onreadystatechange = () => {
//    if (req.readyState == XMLHttpRequest.DONE) {
//            if (req.status === 200) {
//                console.log(JSON.parse(req.responseText));
//                //TODO: use such information to dynamically create the webpage shown in Figure 1
//            } else {
//                console.error('Failed to fetch JSON data. Status:', req.status);
//            }
//         }
//};
//
//req.open('GET', jsonBinURL, true);
//req.setRequestHeader('X-Master-Key', apiKey);
//req.send();

window.onload = function() {

    fetch('res/json/my.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (const element of json){
                let postDiv = document.createElement("div");
                postDiv.className = "post";
                let h3 = document.createElement("h3");
                h3.textContent = element.postTitle;
                let postDate = document.createElement("p");
                postDate.textContent = element.postDate;
                let postAuthor = document.createElement("p");
                postAuthor.textContent = "Author: " + element.postAuthor;
                let p = document.createElement("p");
                p.textContent = element.postText;
                let postImg = document.createElement("img");
                postImg.src = element.postImg;
                let userIcon = document.createElement("img");
                userIcon.src = element.user_icon;
                userIcon.className = "icon";
                let likeIcon = document.createElement("img");
                likeIcon.src = element.like_icon;
                likeIcon.className = "icon";
                let postLikes = document.createElement("p");
                postLikes.textContent = "Likes: " + element.postLikes;

                postDiv.appendChild(h3);
                postDiv.appendChild(postDate);
                postDiv.appendChild(postAuthor);
                postDiv.appendChild(p);
                postDiv.appendChild(postImg);
                postDiv.appendChild(userIcon);
                postDiv.appendChild(likeIcon);
                postDiv.appendChild(postLikes);
                document.body.append(postDiv);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
            })
}