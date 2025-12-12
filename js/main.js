(function() {
    'use strict';

    const servicesData = [
        { icon: 'laptop', title: 'Web Design', text: "Creating beautiful, modern websites that capture your brand's essence and engage your audience." },
        { icon: 'megaphone', title: 'Branding', text: "Building strong brand identities that resonate with your target market and stand out from competition." },
        { icon: 'code', title: 'Development', text: "Clean, efficient code that brings designs to life with smooth functionality and performance." },
        { icon: 'palette', title: 'Creative Design', text: "Innovative visual solutions that communicate your message effectively and memorably." },
        { icon: 'monitor', title: 'Fully Responsive', text: "Designs that look and work perfectly across all devices, from desktop to mobile." },
        { icon: 'eye', title: 'Retina Ready', text: "Crystal clear graphics optimized for high-resolution displays and modern screens." }
    ];

    const portfolioData = [
        { img: 'img/portfolio/1.jpg', title: 'Brand Identity', category: ['all', 'brand'] },
        { img: 'img/portfolio/2.jpg', title: 'Web Application', category: ['all', 'graphic'] },
        { img: 'img/portfolio/3.jpg', title: 'UI Design', category: ['all', 'design'] },
        { img: 'img/portfolio/4.jpg', title: 'Logo Design', category: ['all', 'brand'] },
        { img: 'img/portfolio/5.jpg', title: 'Illustration', category: ['all', 'graphic'] },
        { img: 'img/portfolio/6.jpg', title: 'App Interface', category: ['all', 'design'] }
    ];

    const blogData = [
        { img: 'img/blog/1.jpg', title: 'The Art of Minimalist Design', excerpt: 'Exploring how less can truly be more in modern web design...', date: 'Dec 15, 2024' },
        { img: 'img/blog/2.jpg', title: 'Color Theory for Developers', excerpt: 'Understanding how colors affect user experience and engagement...', date: 'Dec 10, 2024' },
        { img: 'img/blog/3.jpg', title: 'Responsive Design Best Practices', excerpt: 'Essential techniques for creating fluid layouts that work everywhere...', date: 'Dec 5, 2024' },
        { img: 'img/blog/4.jpg', title: 'JavaScript Performance Tips', excerpt: 'Optimize your code for faster load times and smoother interactions...', date: 'Nov 28, 2024' }
    ];

    const icons = {
        laptop: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
        megaphone: '<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
        code: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
        palette: '<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>',
        monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        eye: '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
        link: '<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
        search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
    };

    function init() {
        initNav();
        initTypewriter();
        initParticles();
        initServices();
        initPortfolio();
        initTestimonials();
        initStats();
        initBlog();
        initScrollSpy();
        initSkillBars();
        initContactForm();
    }

    function initNav() {
        const nav = document.getElementById('nav');
        const toggle = document.querySelector('.nav-toggle');
        const menu = document.querySelector('.nav-menu');
        const links = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 100);
        });

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

    function initTypewriter() {
        const element = document.querySelector('.typewriter');
        if (!element) return;

        const words = JSON.parse(element.dataset.words);
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const current = words[wordIndex];
            
            if (isDeleting) {
                element.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                element.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === current.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    function initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const hero = canvas.parentElement;
        let particles = [];
        const particleCount = 80;
        const maxDistance = 150;

        function resize() {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    radius: Math.random() * 3 + 1
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - distance / maxDistance)})`;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        resize();
        createParticles();
        animate();

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });
    }

    function initServices() {
        const grid = document.querySelector('.services-grid');
        if (!grid) return;

        grid.innerHTML = servicesData.map(service => `
            <div class="service-card">
                ${icons[service.icon]}
                <h3>${service.title}</h3>
                <p>${service.text}</p>
            </div>
        `).join('');
    }

    function initPortfolio() {
        const gallery = document.querySelector('.gallery');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox?.querySelector('img');
        const lightboxClose = lightbox?.querySelector('.lightbox-close');

        if (!gallery) return;

        function renderGallery(filter = 'all') {
            const filtered = portfolioData.filter(item => item.category.includes(filter));
            
            gallery.innerHTML = filtered.map(item => `
                <div class="gallery-item" data-src="${item.img}">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="gallery-overlay">
                        <h4>${item.title}</h4>
                        <div class="gallery-icons">
                            <button class="link-btn" aria-label="View link">${icons.link}</button>
                            <button class="zoom-btn" aria-label="Zoom">${icons.search}</button>
                        </div>
                    </div>
                </div>
            `).join('');

            gallery.querySelectorAll('.zoom-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const item = e.target.closest('.gallery-item');
                    if (lightbox && lightboxImg) {
                        lightboxImg.src = item.dataset.src;
                        lightbox.classList.add('active');
                    }
                });
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderGallery(btn.dataset.filter);
            });
        });

        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target === lightboxClose) {
                    lightbox.classList.remove('active');
                }
            });
        }

        renderGallery();
    }

    function initTestimonials() {
        const container = document.querySelector('.testimonials-slider');
        const testimonials = document.querySelectorAll('.testimonial');
        const dotsContainer = document.querySelector('.testimonials-dots');
        
        if (!testimonials.length || !dotsContainer || !container) return;

        let currentIndex = 0;
        let startX = 0;
        let endX = 0;

        testimonials.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showTestimonial(i));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('button');

        function showTestimonial(index) {
            if (index < 0) index = testimonials.length - 1;
            if (index >= testimonials.length) index = 0;
            
            testimonials.forEach(t => t.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }

        function handleSwipe() {
            const diff = startX - endX;
            const threshold = 50;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    showTestimonial(currentIndex + 1);
                } else {
                    showTestimonial(currentIndex - 1);
                }
            }
        }

        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].pageX;
            handleSwipe();
        });

        container.addEventListener('mousedown', (e) => {
            startX = e.pageX;
            container.style.cursor = 'grabbing';
        });

        container.addEventListener('mouseup', (e) => {
            endX = e.pageX;
            container.style.cursor = 'grab';
            handleSwipe();
        });

        container.style.cursor = 'grab';

        let autoSlide = setInterval(() => {
            showTestimonial(currentIndex + 1);
        }, 5000);

        container.addEventListener('mouseenter', () => clearInterval(autoSlide));
        container.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                showTestimonial(currentIndex + 1);
            }, 5000);
        });
    }

    function initStats() {
        const counters = document.querySelectorAll('.counter');
        let animated = false;

        function animateCounters() {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                function update() {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                }

                update();
            });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) observer.observe(statsSection);
    }

    function initBlog() {
        const slider = document.querySelector('.blog-slider');
        const track = document.querySelector('.blog-track');
        const prevBtn = document.querySelector('.blog-prev');
        const nextBtn = document.querySelector('.blog-next');
        
        if (!track || !slider) return;

        const extendedData = [...blogData, ...blogData, ...blogData];
        
        track.innerHTML = extendedData.map(post => `
            <article class="blog-card">
                <img src="${post.img}" alt="${post.title}" draggable="false">
                <div class="blog-card-content">
                    <h4><a href="#">${post.title}</a></h4>
                    <p>${post.excerpt}</p>
                    <span class="date">${post.date}</span>
                </div>
            </article>
        `).join('');

        const cards = track.querySelectorAll('.blog-card');
        const totalOriginal = blogData.length;
        let currentSlide = totalOriginal;
        
        let isDragging = false;
        let startX = 0;
        let currentX = 0;
        let dragOffset = 0;

        function getVisibleCards() {
            if (window.innerWidth < 576) return 1;
            if (window.innerWidth < 768) return 2;
            return 3;
        }

        function getCardWidth() {
            const card = cards[0];
            if (!card) return 0;
            const gap = 30;
            return card.offsetWidth + gap;
        }

        function updateSlider(animate = true) {
            const cardWidth = getCardWidth();
            track.style.transition = animate ? 'transform 0.3s ease' : 'none';
            track.style.transform = `translateX(${-currentSlide * cardWidth + dragOffset}px)`;
        }

        function checkInfinite() {
            const cardWidth = getCardWidth();
            
            if (currentSlide >= totalOriginal * 2) {
                currentSlide = totalOriginal;
                track.style.transition = 'none';
                track.style.transform = `translateX(${-currentSlide * cardWidth}px)`;
            } else if (currentSlide < totalOriginal) {
                currentSlide = totalOriginal * 2 - 1;
                track.style.transition = 'none';
                track.style.transform = `translateX(${-currentSlide * cardWidth}px)`;
            }
        }

        function startDrag(e) {
            isDragging = true;
            startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            currentX = startX;
            track.style.cursor = 'grabbing';
            track.style.transition = 'none';
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            dragOffset = currentX - startX;
            updateSlider(false);
        }

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            track.style.cursor = 'grab';

            const cardWidth = getCardWidth();
            const threshold = cardWidth / 4;

            if (dragOffset < -threshold) {
                currentSlide++;
            } else if (dragOffset > threshold) {
                currentSlide--;
            }

            dragOffset = 0;
            updateSlider(true);
            
            setTimeout(checkInfinite, 350);
        }

        slider.addEventListener('mousedown', startDrag);
        slider.addEventListener('mousemove', drag);
        slider.addEventListener('mouseup', endDrag);
        slider.addEventListener('mouseleave', endDrag);

        slider.addEventListener('touchstart', startDrag, { passive: true });
        slider.addEventListener('touchmove', drag, { passive: false });
        slider.addEventListener('touchend', endDrag);

        prevBtn?.addEventListener('click', () => {
            currentSlide--;
            updateSlider();
            setTimeout(checkInfinite, 350);
        });

        nextBtn?.addEventListener('click', () => {
            currentSlide++;
            updateSlider();
            setTimeout(checkInfinite, 350);
        });

        window.addEventListener('resize', () => updateSlider(false));
        
        track.style.cursor = 'grab';
        
        setTimeout(() => updateSlider(false), 100);
    }

    function initScrollSpy() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.toggle('active', 
                            link.getAttribute('href') === `#${entry.target.id}`
                        );
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        sections.forEach(section => observer.observe(section));
    }

    function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.dataset.width;
                    entry.target.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
