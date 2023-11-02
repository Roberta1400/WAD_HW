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

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status === 200) {
                console.log(JSON.parse(req.responseText));
                //TODO: use such information to dynamically create the webpage shown in Figure 1
            } else {
                console.error('Failed to fetch JSON data. Status:', req.status);
            }
         }
};

req.open('GET', jsonBinURL, true);
req.setRequestHeader('X-Master-Key', apiKey);
req.send();
