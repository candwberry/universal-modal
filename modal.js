(function() {

    const hasSeenModal = localStorage.getItem('hasSeenModal');
    
    if (hasSeenModal) {
        return;
    }
    
    const modal = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeModal');
    
    setTimeout(function() {
        modal.classList.add('active');
        setTimeout(function() {
            modal.classList.add('fade-in');
        }, 4);
    }, 5000);
    
    function closeModal() {
        modal.classList.remove('fade-in');
        setTimeout(function() {
            modal.classList.remove('active');
        }, 300);
 
        localStorage.setItem('hasSeenModal', 'true');
    }
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
})();
