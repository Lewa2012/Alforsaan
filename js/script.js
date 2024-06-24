const chatInput = document.getElementById('chatInput');

chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    let newHeight = Math.min(this.scrollHeight, 100);
    this.style.height = newHeight + 'px';
    this.style.overflowY = newHeight >= 100 ? 'auto' : 'hidden';
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        const url = `https://wa.me/966561837211?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    }
}