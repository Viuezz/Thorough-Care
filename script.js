// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.hero, .campaign-card, .horse-card, .merch-item');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('fade-in');
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Campaign progress tracking
function updateCampaignProgress() {
    const campaigns = [
        { id: 'new-stable', current: 325000, goal: 500000 },
        { id: 'feed-program', current: 80000, goal: 200000 },
        { id: 'vet-care', current: 375000, goal: 500000 }
    ];
    
    campaigns.forEach(campaign => {
        const progressBar = document.getElementById(`progress-${campaign.id}`);
        if (progressBar) {
            const percentage = (campaign.current / campaign.goal) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', updateCampaignProgress);