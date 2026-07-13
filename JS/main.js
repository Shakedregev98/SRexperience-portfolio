document.addEventListener("DOMContentLoaded", () => {
    // מוצא את כל הסליידרים בעמוד (יעבוד גם לפי ה-ID וגם לפי הקלאס)
    const sliders = document.querySelectorAll(".before-after-container");
    
    sliders.forEach(container => {
        const beforeImg = container.querySelector(".img-before");
        const handle = container.querySelector(".slider-handle");
        
        if (!beforeImg || !handle) return;

        let isDragging = false;

        const moveSlider = (clientX) => {
            const rect = container.getBoundingClientRect();
            let x = clientX - rect.left;
            let percentage = (x / rect.width) * 100;
            
            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;

            beforeImg.style.width = `${percentage}%`;
            handle.style.left = `${percentage}%`;
        };

        // אירועי עכבר
        container.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            moveSlider(e.clientX);
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            moveSlider(e.clientX);
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
        });
        
        // אירועי מגע (מובייל)
        container.addEventListener("touchstart", (e) => {
            isDragging = true;
            moveSlider(e.touches[0].clientX);
        });

        window.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            moveSlider(e.touches[0].clientX);
        }, { passive: true });

        window.addEventListener("touchend", () => {
            isDragging = false;
        });
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) { // הגנה קטנה למקרה שאין המבורגר בעמוד
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});