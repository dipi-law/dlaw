/* --- Bar Council Disclaimer Logic --- */
document.addEventListener('DOMContentLoaded', () => {
    // Check session storage to see if the user already agreed in this browsing session
    const hasAgreed = sessionStorage.getItem('dlawDisclaimerAgreed');
    const overlay = document.getElementById('disclaimerOverlay');

    if (!hasAgreed) {
        // If they haven't agreed, show disclaimer, keep body locked
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        // If already agreed, allow normal scrolling
        document.body.style.overflow = 'auto';
    }
});

function agreeDisclaimer() {
    // Save state so it doesn't pop up again while the tab is open
    sessionStorage.setItem('dlawDisclaimerAgreed', 'true');
    const overlay = document.getElementById('disclaimerOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore website scrolling
}

function disagreeDisclaimer() {
    // Redirect un-consenting traffic to LinkedIn profile
    window.location.href = "https://www.linkedin.com/in/dipijethwa/";
}

/* --- Mobile Navigation Logic --- */
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Close mobile menu automatically when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navLinks');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

/* --- General Modal Logic (Contact, Terms, Privacy) --- */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling behind the modal
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }
}

// Close modals when clicking strictly on the dark overlay (outside the white box)
window.onclick = function (event) {
    const overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(overlay => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}