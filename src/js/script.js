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
