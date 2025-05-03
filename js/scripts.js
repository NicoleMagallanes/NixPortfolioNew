// Function to open the modal
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Set modal content dynamically based on projectId
    if (projectId === 'project1') {
        modalTitle.textContent = 'Project 1';
        modalDescription.textContent = 'Detailed description of Project 1. This project showcases my skills in web development.';
    } else if (projectId === 'project2') {
        modalTitle.textContent = 'Project 2';
        modalDescription.textContent = 'Detailed description of Project 2. This project highlights my expertise in JavaScript and animations.';
    }

    modal.classList.add('show'); // Add 'show' class to display modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Remove 'show' class to hide modal
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
};

// Close modal when pressing the Escape key
window.onkeydown = function (event) {
    const modal = document.getElementById('modal');
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
};

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once
    easing: 'ease-in-out', // Easing function for animations
});