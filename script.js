const container = document.querySelector('.container');
const image = document.querySelector('.image');
const logo = document.querySelector('.logo');
const text = document.querySelector('.text');
const buttons = document.querySelector('.buttons');
const newCustomer = document.querySelector('.new-customer');
const main = document.querySelector('.main');

function loadingAnimation() {
    // Initial states
    container.style.opacity = 0;
    container.style.transform = "scaleX(0.7) scaleY(0.2) translateY(80%)";
    container.style.borderRadius = "150px";
    logo.style.opacity = 0;  // Hide the logo initially
    text.style.opacity = 0;  // Hide the text initially

    // Fade in the container
    setTimeout(() => {
        container.style.transition = "opacity 0.2s ease";
        container.style.opacity = 1;
    }, 200); // delay 0.2s

    // Apply the scale and border-radius transition
    setTimeout(() => {
        container.style.transition = "transform 2s ease-out, border-radius 2s ease-out";
        container.style.transform = "scale(1)";
        container.style.borderRadius = "0";
    }, 400); // After the fade-in (0.2s)

    // Fade in the image
    setTimeout(() => {
        image.style.opacity = 0;
        image.style.transition = "opacity 0.5s ease";
        image.style.opacity = 1;
    }, 1400); // After the container finishes the scale animation

    // Fade in the logo after image animation completes
    setTimeout(() => {
        logo.style.transition = "opacity 1s ease";
        logo.style.opacity = 1;  // Show the logo
    }, 2900); // Adjusted timing so the logo appears after image animation

    // Move logo to top left and resize image after 2 seconds
    setTimeout(() => {
        logo.classList.add('move');  // Move logo
        image.classList.add('shrink'); // Resize image
    }, 4000); // 2 seconds after the logo appears

    // Show text after logo and image resizing
    setTimeout(() => {
        text.classList.add('show');  // Show text beside the logo
    }, 4300); // 1 second after the logo moves to top-left

    // Show buttons after text appears
    setTimeout(() => {
        buttons.classList.add('btn');  // Show text beside the logo
    }, 4300); // 1 second after the logo moves to left-right

    // Show a after text btn
    setTimeout(() => {
        newCustomer.classList.add('new-coust');  // Show text beside the logo
    }, 4300); // 1 second after the logo moves to top-left

    // Main
    setTimeout(() => {
        main.classList.add('main_animation');  // Show text beside the logo
    }, 4300); // 1 second after the logo moves to top-left

}

document.addEventListener('DOMContentLoaded', function() {
    const onlineIdInput = document.getElementById('online-id');
    const passwordInput = document.getElementById('password');
    const submitButton = document.querySelector('.submit-btn');

    // Function to check if both fields are filled
    function checkInput() {
        if (onlineIdInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            submitButton.style.backgroundColor = '#2680b3';  // Change color when filled
        } else {
            submitButton.style.backgroundColor = '#90d6ff';  // Default color
        }
    }

    // Attach event listeners to both input fields
    onlineIdInput.addEventListener('input', checkInput);
    passwordInput.addEventListener('input', checkInput);
});


loadingAnimation();

// Function to handle form submission animation
function submitAnimation() {
    const submitButton = document.querySelector('.submit-btn');
    const btnText = document.querySelector('.btn-text');
    const loadingIcon = document.querySelector('.loading-icon');
    const logo = document.querySelector('.logo');  // Select the logo element

    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form submission
        
        // Hide the button text and show the loading icon
        btnText.style.display = 'none';
        loadingIcon.style.display = 'inline-block';

        // Add the .main_close class to the target element
        main.classList.add('main_close');

        // Add the .unshow class to the target element
        text.classList.add('unshow');

        // Add the .new_close_coust class to the target element
        newCustomer.classList.add('new_close_coust');

        // Add the .unshow class to the target element
        buttons.classList.add('btn_close');

        // Add the .image_close class to the target element
        image.classList.remove('shrink');
        image.classList.add('image_close');

        // Add the .logo_close class to the logo element with a delay
        logo.classList.remove('move');  // Ensure the logo is not in the moving state
        setTimeout(() => {
            logo.classList.add('logo_close');  // Shrinks and fades out the logo smoothly
        }, 1000);
    });
}

// Call the function to activate the animation on form submission
submitAnimation();


