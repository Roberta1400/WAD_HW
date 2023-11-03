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

const binID = '6543ea6354105e766fca8c48';
const binVersion = 'latest';
const apiKey = '$2a$10$96ItLli6GmLKcQ79hYBX..Sp6qKE9jKKT8VacpSidqrZVp2BC.yNC';

const jsonBinURL = `https://api.jsonbin.io/v3/b/${binID}/${binVersion}`;

const req = new XMLHttpRequest();

window.onload = function() {
req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status === 200) {
                const data = JSON.parse(req.responseText);
                
                for (const postData of data.record) {
                    const postContainer = document.querySelector('.posts');

                    const postElement = document.createElement('div');
                    postElement.classList.add('ipost');
    
                    const postHeader = document.createElement('div');
                    postHeader.classList.add('postHeader');

                    const likes = document.createElement('div');
                    likes.classList.add('likes');
    
                    const userIcon = document.createElement('img');
                    userIcon.classList.add('user_icon');
                    userIcon.src = postData.user_icon;

                    const likeIcon = document.createElement('img');
                    likeIcon.classList.add('like_icon');
                    likeIcon.src = postData.like_icon;
    
                    const postDate = document.createElement('h4');
                    postDate.classList.add('date');
                    postDate.textContent = postData.postDate;

                    const postAuthor = document.createElement('h4');
                    postAuthor.classList.add('user');
                    postAuthor.textContent = postData.postAuthor;

                    const postTitle = document.createElement('h4');
                    postTitle.classList.add('title');
                    postTitle.textContent = postData.postTitle;
    
                    postHeader.appendChild(userIcon);
                    postHeader.appendChild(postDate);
    
                    const postBody = document.createElement('p');
                    postBody.classList.add('body');
                    postBody.textContent = postData.postText;

                    const postLikes = document.createElement('p');
                    postLikes.classList.add('like');
                    postLikes.textContent = postData.postLikes;
    
                    const postImage = document.createElement('img');
                    postImage.classList.add('img');
                    if (postData.postImg) {
                        postImage.src = postData.postImg;
                    }
                    
                    postHeader.appendChild(postAuthor);
                    postHeader.appendChild(postDate);
                    postElement.appendChild(postHeader);
                    postElement.appendChild(postTitle);
                    postElement.appendChild(postBody);
                    postElement.appendChild(postImage);
                    likes.appendChild(likeIcon);
                    likes.appendChild(postLikes);
                    postElement.appendChild(likes)
                    
    
                   postContainer.append(postElement);
                }
           } else {
                console.error('Failed to fetch JSON data. Status:', req.status);
            }
         }
}};

req.open('GET', jsonBinURL, true);
req.setRequestHeader('X-Master-Key', apiKey);
req.send();