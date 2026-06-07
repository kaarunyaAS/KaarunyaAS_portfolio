// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initTypingAnimation();
    initScrollAnimations();
    initMobileMenu();
    initBackToTop();
    initResumeDownload();
    loadProjects();
    loadCertifications();
});

// Typing Animation
function initTypingAnimation() {
    const text = "Systems with AI";
    const typingElement = document.querySelector('.typing-text');
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card, .cert-card, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Resume Download Modal
function initResumeDownload() {
    const resumeBtn = document.getElementById('resumeDownload');
    const footerResumeBtn = document.getElementById('footerResume');
    const modal = document.getElementById('resumeModal');
    const closeModal = document.querySelector('.close-modal');
    const downloadPDF = document.getElementById('downloadPDF');
    const downloadDOC = document.getElementById('downloadDOC');
    
    // Open modal
    [resumeBtn, footerResumeBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Download handlers
    downloadPDF.addEventListener('click', () => {
        downloadResume('pdf');
    });
    
    downloadDOC.addEventListener('click', () => {
        downloadResume('doc');
    });
    
    function downloadResume(format) {
        modal.classList.remove('show');

        const resumeFiles = {
            pdf: "Kaarunya_AS_Resume.pdf",
            doc: "Kaarunya_AS_Resume.doc"
        };

        const filePath = resumeFiles[format];
        if (!filePath) {
            alert("Resume format not available.");
            return;
        }

        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath;
        if (format === 'pdf') {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}

// Load Projects Data
function loadProjects() {
    const projects = [
        {
            title: "AI Personal Assistant Agent",
            date: "July 2025",
            description: "AI-powered automation connecting Google Calendar, Gemini AI, and Telegram for intelligent schedule management and real-time updates using no-code workflow automation.",
            tech: ["Make (Integromat)", "Automation", "No-code", "AI Integration"],
            github: "https://eu2.make.com/public/shared-scenario/8cSE8TAdL5o/integration-telegram-bot-google-calenda",
            role: "Automation Developer",
            team: "Individual",
            icon: "fas fa-robot"
        },
        {
            title: "ML Spark Project – Mask Detection",
            date: "November 2025",
            description: "Real-time face mask detection system using OpenCV, TensorFlow, and Apache Spark for distributed image processing with CNN classification and live webcam feed.",
            tech: ["Python", "OpenCV", "TensorFlow", "Spark", "CNN"],
            github: "https://github.com/kaarunyaAS/Face_Mask_Detection",
            role: "ML Developer",
            team: "Individual",
            icon: "fas fa-mask"
        },
        
        {
            title: "Healthcare Management System",
            date: "April 2025",
            description: "Digital platform for managing patient records, doctor appointments, and medical data with secure authentication and efficient hospital data organization.",
            tech: ["HTML/CSS/JS","Python flask", "MySQL", "Management System"],
            github: "https://github.com/kaarunyaAS/Healthcare-Management-System",
            role: "Backend Developer",
            team: "2 members",
            icon: "fas fa-hospital"
        },
        {
            title: "Shopper's Trail Analysis",
            date: "April 2025",
            description: "Business analytics project using IBM Cognos to study customer purchasing behavior and generate actionable retail strategy insights from transaction data.",
            tech: ["Data Analysis", "IBM Cognos", "Business Intelligence", "Dashboard"],
            github: "https://github.com/kaarunyaAS/Shoppers-trail-cognos-analysis",
            role: "Data Analyst",
            team: "3 members",
            icon: "fas fa-chart-line"
        },

        // ================= NEW PROJECTS =================

        {
            title: "Illegal Electric Fence Detection and Prevention",
            date: "April 2026",
            description: "AI-assisted IoT monitoring system using ESP32, Flask, and Supabase to detect illegal electric fence activities with real-time sensor monitoring, risk classification, and alert generation.",
            tech: ["ESP32", "Flask", "Supabase", "AI/IoT"],
            github: "https://github.com/Janaki2503/Electric_Fence_project1",
            role: "AI Developer",
            team: "3 members",
            icon: "fas fa-bolt"
        },

        {
            title: "Cloud-Based Voice Messaging System",
            date: "April 2026",
            description: "Web-based voice messaging system using Twilio, Supabase, and Flask for browser-based voice recording, cloud storage, and real-time SMS notifications through shareable voice message links.",
            tech: ["Flask", "Twilio", "Supabase", "Web App"],
            github: "https://github.com/kaarunyaAS/voicemail_project",
            role: "Full Stack Developer",
            team: "Individual",
            icon: "fas fa-microphone"
        },

        {
            title: "BridgeCare - Smart Connect for Homeless",
            date: "December 2025",
            description: "Compassionate digital platform designed to support homeless individuals by connecting them with shelters, food resources, healthcare assistance, and NGOs.",
            tech: ["Python Flask", "Supabase", "HTML/CSS/JS"],
            github: "https://github.com/kaarunyaAS/Bridgecare-smart_connect_for_homeless-",
            role: "Backend Developer",
            team: "4 members",
            icon: "fas fa-hands-helping"
        }

    ];

    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate__animated';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3><i class="${project.icon}"></i> ${project.title}</h3>
                <span class="project-date">${project.date}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-role">
                <strong>Role:</strong> ${project.role} | <strong>Team:</strong> ${project.team}
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    ${project.title.includes('AI Personal Assistant') ? 
                        `<a href="${project.github}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>` : ''
                    }
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Load Certifications Data
function loadCertifications() {
    const certifications = [
        {
            icon: "fas fa-trophy",
            title: "Best Innovation Award",
            description: "Hackathon – HealthSprout: Nutrition & Fitness Tracking System"
        },
        {
            icon: "fas fa-file-alt",
            title: "IEEE Paper Presenter",
            description: "Smart Connect System for the Homeless - Presented at IEEE International Conference"
        },
        {
            icon: "fas fa-medal",
            title: "2nd Place - Chatbot Competition",
            description: "Google Developer Student Clubs - AI Chatbot Development Competition"
        },
        {
            icon: "fas fa-certificate",
            title: "Full Stack Development",
            description: "Novitech Solutions - Certified Full Stack Developer"
        },
        {
            icon: "fas fa-certificate",
            title: "Machine Learning",
            description: "Novitech Solutions - Certified Machine Learning Engineer"
        },
        {
            icon: "fas fa-certificate",
            title: "Data Science Fundamentals",
            description: "Cisco Networking Academy - Data Science Certification"
        },
        {
            icon: "fas fa-certificate",
            title: "Python Programming",
            description: "Google - Advanced Python Programming Certification"
        },
    ];

    // Leadership & Coordination Achievements
    const leadership = [
        {
            icon: "fas fa-flag",
            title: "Republic Day <br>March Past 2nd Place (Jan 2026)",
            description: "Served as March Past Captain during Republic Day 2026 celebrations, leading the team with discipline, coordination, and teamwork to secure 2nd place. (Republic Day – January 2026)"
        },
        {
            icon: "fas fa-award",
            title: "Independence Day March Past <br> 1st Place (Aug 2025)",
            description: "Worked as Vice Captain for the Independence Day parade team, contributing to team coordination, leadership, and performance that achieved 1st place. (Independence Day – August 2025)"
        },
        {
            icon: "fas fa-lightbulb",
            title: "InnoPitch Event Organizer <br>(Mar 2026)",
            description: "Organized and managed InnoPitch, gaining hands-on experience in event planning, coordination, teamwork, scheduling, and participant management. (InnoPitch – March 2026)"
        },
        {
            icon: "fas fa-laptop-code",
            title: "HACKFEST Coordinator <br> (Feb 2026)",
            description: "Coordinated a 36-hour non-stop hackathon organized by the AI Department of MKCE, managing participant engagement, event flow, technical coordination, and team communication. (HACKFEST – February 2026)"
        },
    ];

    const certGrid = document.querySelector('.certifications-grid');
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card animate__animated';
        certCard.innerHTML = `
            <i class="${cert.icon}"></i>
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
        `;
        certGrid.appendChild(certCard);
    });

    // Leadership Section
    const leadershipGrid = document.querySelector('.leadership-grid');
    if (leadershipGrid) {
        leadership.forEach(item => {
            const leaderCard = document.createElement('div');
            leaderCard.className = 'cert-card animate__animated';
            leaderCard.innerHTML = `
                <i class="${item.icon}"></i>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            leadershipGrid.appendChild(leaderCard);
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
        // Close mobile nav after click
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 1024 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Add hover effect to project cards
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.project-card')) {
        const card = e.target.closest('.project-card');
        const allCards = document.querySelectorAll('.project-card');
        
        allCards.forEach(c => {
            if (c !== card) {
                c.style.transform = 'scale(0.98)';
                c.style.opacity = '0.9';
            }
        });
    }
});

document.addEventListener('mouseout', function(e) {
    if (!e.target.closest('.project-card')) {
        const allCards = document.querySelectorAll('.project-card');
        allCards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '';
        });
    }
});

// Add particle effect on click
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn-primary') || e.target.closest('.skill-tag')) {
        createParticles(e.clientX, e.clientY);
    }
});

function createParticles(x, y) {
    const colors = ['#6366f1', '#8b5cf6', '#10b981'];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let opacity = 1;
        const animate = () => {
            particle.style.left = `${parseFloat(particle.style.left) + vx}px`;
            particle.style.top = `${parseFloat(particle.style.top) + vy}px`;
            particle.style.opacity = opacity;
            
            opacity -= 0.02;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Add current year to copyright
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = `© ${currentYear} Kaarunya A S. All rights reserved.`;
    }
});
