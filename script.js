 
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Loading animation
        window.addEventListener('load', () => {
            const loader = document.querySelector('.loader');
            loader.classList.add('hidden');
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scroll functions
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }



function scrollToServices() {
    const howWeDo = document.getElementById('howWeDo');
    howWeDo.style.display = 'block';

}

        //function scrollToServices() {
           // document.getElementById('services').scrollIntoView({ behavior: 'smooth' });

        // Client filtering
        function filterClients(category) {
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const clients = document.querySelectorAll('.client-card');
            clients.forEach(client => {
                if (category === 'all' || client.dataset.category === category) {
                    client.style.display = 'block';
                    setTimeout(() => {
                        client.style.opacity = '1';
                        client.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    client.style.opacity = '0';
                    client.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        client.style.display = 'none';
                    }, 300);
                }
            });
        }

        // Platform item click animation
        document.querySelectorAll('.platform-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });

        // Service card hover effect
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add hover effect to client cards
        document.querySelectorAll('.client-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

