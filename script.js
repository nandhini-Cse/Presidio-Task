
function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}




function forgotPassword() {
    // Add logic to handle the "Forgot Password" functionality
    alert("Forgot Password clicked. Redirect or show recovery options.");
}

function showSignupForm() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}
function validateSignUp() {
    var password = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return;
    }

    // Continue with the signup logic if the passwords match
    // ...
}
function togglePassword(fieldId) {
    var passwordField = document.getElementById(fieldId);
    var icon = document.querySelector(`#${fieldId} + .toggle-password`);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.innerHTML = "&#x1F440;"; // Change icon to closed eye
    } else {
        passwordField.type = "password";
        icon.innerHTML = "&#x1F441;"; // Change icon to open eye
    }
}
function like(likeCountId) {
    const likeCountElement = document.getElementById(likeCountId);
    let likes = parseInt(likeCountElement.textContent);
    likes++;
    likeCountElement.textContent = `${likes} ${likes === 1 ? 'Like' : 'Likes'}`;
}
 
function toggleCategoryList() {
    const categoryList = document.getElementById('categoryList');
    categoryList.style.display = categoryList.style.display === 'none' ? 'block' : 'none';
}

function filterByCategory(category) {
    // Implement your filtering logic based on the selected category
    console.log('Filter by category:', category);
    toggleCategoryList(); // Hide the category list after selecting a category
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the category from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Update the heading
    document.querySelector('h2').innerText = `Filtered Images - ${category}`;

    // Filter and display images based on the category
    filterAndDisplayImages(category);
});

function filterAndDisplayImages(category) {
    const imageContainer = document.getElementById('imageContainer');

    // Example: Replace the URLs with your actual image URLs based on the category
    const imageUrls = getImageUrlsByCategory(category);

    // Create image elements and append them to the container
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        img.classList.add('image');
        imageContainer.appendChild(img);
    });
}

function toggleCategoryList() {
    const categoryList = document.getElementById('categoryList');
    categoryList.style.display = (categoryList.style.display === 'block') ? 'none' : 'block';
}

function selectCategory(category) {
    // Set the selected category to the search bar
    document.getElementById('searchBar').value = category;

    // Redirect to a new page with the selected image
    const selectedImage = category.toLowerCase().replace(' ', '_') + '.jpg';
    window.location.href = `new_page.html?image=${selectedImage}`;
}
    