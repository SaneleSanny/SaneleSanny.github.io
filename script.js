// Scroll progress function
window.onscroll = function() {
    const progressBar = document.getElementById('progress-bar');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY;

    // Avoid division by zero
    if (totalHeight > 0) {
        const progress = (scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }
};

// Modal handling
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');

    // Here you can customize the modal content based on the projectId
    modalBody.innerHTML = `
        <h3>Project ${projectId}</h3>
        <p>Details about project ${projectId}...</p>
        <button class="btn" onclick="closeModal()">Close</button>
    `;

    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false'); // For accessibility
    modal.setAttribute('aria-labelledby', `project-${projectId}`); // Associate with heading
    modal.setAttribute('role', 'dialog'); // Indicate it's a dialog
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true'); // Update accessibility attribute
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal(); // Use the closeModal function for consistency
    }
};

// Close modal with the 'Escape' key
window.addEventListener('keydown', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.key === 'Escape' && modal.style.display === "block") {
        closeModal();
    }
});

window.addEventListener('load', function() {
    document.getElementById('skeleton-loader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});
