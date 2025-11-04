// Products Data
const products = [
    // Glass Products
    { 
        name: ' Mirror', 
        location: 'Glass Products',
        type: 'Decorative – Customized',
        description: 'High-quality mirrors available in clear and various tinted colors (bronze, grey, clear, blue,pink , gold). Used for interior design, vanity areas, and decorative wall features. Available thickness: 4mm to 12mm.',
        features: ['Colors: Bronze, Grey, Clear', 'Thickness: 4mm – 8mm', 'High Reflectivity', 'Custom Sizing'],
        image: 'assets/mirrr.jpg'
    },
    { 
        name: 'Vitrail', 
        location: 'Glass Products',
        type: 'Artistic – Customized',
        description: 'Traditional or modern stained glass art, custom-designed for decorative windows, doors, and partitions. Includes Italian stainless steel accessories and available in sliding, fixed, corner, or hinged systems.',
        features: ['Custom Artistic Designs', 'Italian Stainless Steel Accessories', 'System Types: Sliding, Fixed, Corner, Hinged', 'Colored Glass Options', 'Light Diffusion'],
        image: 'assets/vitrail.jpg'
    },
    { 
        name: 'UV Printing', 
        location: 'Glass Products',
        type: 'Customization – Customized',
        description: 'High-resolution UV printing directly onto glass surfaces for custom graphics, logos, and photographic images. Provides durable, vibrant colors and smooth finishes with Italian stainless steel accessories.',
        features: ['High-Resolution Graphics', 'Durable UV-Resistant Colors', 'Custom Logos and Images', 'Italian Stainless Steel Accessories', 'Available in Custom Thickness'],
        image: 'assets/uvvvv.png'
    },
    { 
        name: 'Shower Tray', 
        location: 'Glass Products',
        type: 'Bathroom – Customized',
        description: 'Custom-designed glass shower systems and trays, including UV-printed and clear tempered glass. Equipped with Italian stainless steel accessories and minimalist aluminum frames, available in sliding, fixed, corner, and hinged systems.',
        features: ['Italian Stainless Steel Accessories', 'System Types: Sliding, Fixed, Corner, Hinged', 'Thickness: 6mm – 19mm', 'Custom Colors: Bronze, Clear, Green, Blue', 'Tempered Safety Glass'],
        image: 'assets/shower.jpg'
    },
    { 
        name: 'Glass Tables', 
        location: 'Glass Products',
        type: 'Furniture – Customized',
        description: 'Custom-fabricated glass tabletops and furniture, including tempered and laminated options for safety and durability. Available in clear, bronze, green, and blue with thickness from 6mm to 19mm.',
        features: ['Thickness: 6mm – 19mm', 'Custom Color Options', 'Tempered or Laminated', 'Modern Furniture Design', 'Durable for Everyday Use'],
        image: 'assets/table.jpg'
    },
    { 
        name: 'Float Glass', 
        location: 'Glass Products',
        type: 'Basic – Customized',
        description: 'Float glass is the most widely used type of glass in modern glazing systems. It provides high optical clarity and consistent thickness, commonly used for windows, doors, and roofs.',
        features: ['Thickness: 4mm – 19mm', 'High Optical Clarity', 'Consistent Thickness', 'Versatile Base Material', 'Suitable for Windows, Doors, and Roofs'],
        image: 'assets/floatglass.jpg'
    },
    { 
        name: 'Tinted Glass', 
        location: 'Glass Products',
        type: 'Solar Control – Customized',
        description: 'High-quality tinted glass with added metal oxides for a distinctive appearance in grey, bronze, green, and blue. Reduces solar heat and glare. Available thickness: 4mm to 12mm.',
        features: ['Colors: Grey, Bronze, Green, Blue', 'Thickness: 4mm – 12mm', 'Reduces Solar Heat', 'Glare Control', 'Aesthetic Appearance'],
        image: 'assets/tinedglass.jpg'
    },
    { 
        name: 'Ultra Clear Glass (Crystal)', 
        location: 'Glass Products',
        type: 'Premium – Customized',
        description: 'Ultra clear float glass (low-iron) with exceptional transparency and color neutrality. Used for premium facades, showcases, and modern interiors.',
        features: ['Thickness: 4mm – 19mm', 'Exceptional Transparency', 'Color Neutrality', 'Superior Light Transmission'],
        image: 'assets/ultraclear.png'
    },
    { 
        name: 'Reflective Glass', 
        location: 'Glass Products',
        type: 'Solar Control / Privacy – Customized',
        description: 'Reflective glass coated with a metallic oxide layer for a mirror-like effect, offering solar heat reduction, privacy, and modern aesthetics. Colors include bronze, grey, green, and blue, with thickness from 4mm to 12mm.',
        features: ['Colors: Bronze, Grey, Green, Blue', 'Thickness: 4mm – 12mm', 'Mirror-Like Reflection', 'Privacy Enhancement', 'Energy Efficient'],
        image: 'assets/rflvt.png'
    },
    { 
        name: 'Low-E Glass', 
        location: 'Glass Products',
        type: 'Energy Efficient – Customized',
        description: 'Low-Emissivity glass with a thin metallic oxide coating to reduce heat transfer while maintaining light transmission. Available thickness: 4mm to 10mm.',
        features: ['Thickness: 4mm – 10mm', 'Reduces Heat Transfer', 'Maximum Light Transmission', 'Improved Thermal Insulation'],
        image: 'assets/lowee.png'
    },
    { 
        name: 'Tempered Glass', 
        location: 'Glass Products',
        type: 'Safety Glass – Customized',
        description: 'Heat-treated glass up to five times stronger than ordinary glass. Ideal for windows, doors, and roofs. Can be clear, tinted, or frosted.',
        features: ['Thickness: 4mm – 19mm', '5x Stronger than Standard Glass', 'High Impact Resistance', 'Suitable for Windows, Doors, and Roofs', 'Safety Fragmentation'],
        image: 'assets/temperedglass.jpg'
    },
    { 
        name: 'Decorative Glass', 
        location: 'Glass Products',
        type: 'Aesthetic – Customized',
        description: 'Decorative glass with treatments such as frosted, acid-etched, fluted, and fused finishes. Combines privacy with style. Available in colors and thickness from 6mm to 12mm.',
        features: ['Thickness: 6mm – 12mm', 'Frosted / Etched / Fused Options', 'Custom Colors', 'Can Be Tempered and Laminated', 'Privacy and Light Diffusion'],
        image: 'assets/dcrtv.png'
    },
    { 
        name: 'Laminated Glass', 
        location: 'Glass Products',
        type: 'Safety & Security – Customized',
        description: 'Two or more glass sheets bonded with PVB or EVA interlayers. Remains intact when broken. Used for safety, sound insulation, and bullet resistance. Thickness: 4mm to 20mm.',
        features: ['Thickness: 4mm – 20mm', 'Remains Intact When Broken', 'Excellent Sound Insulation', '99% UV Protection', 'Can Be Tempered or Bulletproof', 'customized thicknesses'],
        image: 'assets/leminated.jpg'
    },
    { 
        name: 'Bullet Proof Glass', 
        location: 'Glass Products',
        type: 'Ballistic Security – Customized',
        description: 'Multi-layer laminated glass system designed to resist bullets and projectiles. Certified protection levels from B1 to B7, with thickness between 20mm and 100mm.',
        features: ['Thickness: 20mm – 100mm', 'Ballistic Resistance (B1–B7)', 'High Optical Clarity', 'Certified Safety Glass'],
        image: 'assets/bulletproof.png'
    },
    { 
        name: 'Fire Rated Glass', 
        location: 'Glass Products',
        type: 'Safety – Customized',
        description: 'Glass engineered to resist the passage of fire, heat, and smoke for 30 to 120 minutes. EI and E classified, available from 10mm to 60mm thickness.',
        features: ['Thickness: 10mm – 60mm', 'Fire Ratings: EI & E Certified', 'Heat and Smoke Barrier', 'Certified Safety Solution'],
        image: 'assets/fire.png'
    },
    { 
        name: 'Curved Glass', 
        location: 'Glass Products',
        type: 'Architectural – Customized',
        description: 'Architectural curved glass thermally or mechanically shaped. Suitable for facades, skylights, and furniture. Can be laminated or tempered, with thickness from 6mm to 12mm.',
        features: ['Thickness: 6mm – 12mm', 'Tempered or Laminated', 'Architectural Flexibility', 'Custom Curved Shapes'],
        image: 'assets/curves.png'
    },
    {
        name: 'Glass Railing System',
        location: 'Glass Products',
        type: 'Balustrade – Customized',
        description: 'Modern frameless glass railing system designed for balconies, terraces, and stairs. Provides transparency, safety, and elegance.',
        features: [
            "Installation: steel and stainless steel U chanel inbeded , Aluminum Profile , Stainless steel accessories ....",
            'Water Drainage: Available',
            'High Wind Load Resistance',
            'Thickness: 6mm to 20mm',
            'Tempered & Laminated Glass Options'
        ],
        image: 'assets/railing.png'
    },
    // Aluminum and Steel Products
    { 
        name: 'Curtain Wall Systems', 
        location: 'Aluminum Products',
        type: 'Facade – Customized',
        description: 'Advanced aluminum facade systems including Stick and Unitized configurations. Offers durability, insulation, and aesthetic appeal.',
        features: ['Stick Systems', 'Unitized Systems', 'Thermal and Acoustic Insulation'],
        image: 'assets/curtain.jpg'
    },
    { 
        name: 'Window Systems', 
        location: 'Aluminum Products',
        type: 'Openings – Customized',
        description: 'Casement, Sliding, Tilt & Turn, and Minimalist window systems with aluminum minimalist frames. Available with soundproof and bulletproof options.',
        features: ['Casement / Sliding / Tilt & Turn', 'Soundproof Options', 'Bulletproof Configurations', 'Aluminum Minimalist Frame'],
        image: 'assets/window.jpg'
    },
    { 
        name: 'Door Systems', 
        location: 'Aluminum Products',
        type: 'Openings – Customized',
        description: 'Swing, Sliding, Automatic, and Minimalist aluminum door systems. Available in bulletproof, fire-rated, and soundproof variants.',
        features: ['Swing / Sliding / Automatic', 'Bulletproof & Fire-Rated Options', 'Aluminum Minimalist Frame', 'Modern Aesthetic Design'],
        image: 'assets/neww.jpg'
    },
    { 
        name: 'Railing aluminum', 
        location: 'Aluminum Products',
        type: 'Safety – Customized',
        description: 'Railing glass systems combining tempered laminated glass with stainless steel or aluminum bases. Offers strength, transparency, and safety.',
        features: ['Thickness: 12mm – 21mm', 'Tempered & Laminated', 'Stainless or Aluminum Base', 'Elegant Design'],
        image: 'assets/railll.jpg'
    },
    { 
        name: 'Partition & Interior Systems', 
        location: 'Aluminum Products',
        type: 'Interior – Customized',
        description: 'Custom aluminum and glass systems for modern partitioning. Includes soundproof, minimalist, and decorative finishes.',
        features: ['Glass Partitions', 'Minimalist Aluminum Frames', 'Flexible Layouts', 'Custom Finishes'],
        image: 'assets/prt.png'
    },
    { 
        name: 'Roofing & Skylight Systems', 
        location: 'Aluminum Products',
        type: 'Overhead – Customized',
        description: 'Aluminum and steel structures for skylights and roofs. Designed for strength, safety, and natural light optimization.',
        features: ['Aluminum & Steel Structure', 'Bulletproof & Soundproof Options', 'Weather Resistance'],
        image: 'assets/sky.jpg'
    },
    { 
        name: 'Specialized Aluminum Systems', 
        location: 'Aluminum Products',
        type: 'Specialty – Customized',
        description: 'Specialized systems offering high-end performance and sleek aesthetics, including advanced kinetic and minimal façade technologies.',
        features: [
            'Sliding / Folding / Bi-Folding',
            '5 Rails Aluminum System',
            'Lift and Slide',
            'Minimal Sliding System',
            'Pivot Aluminum System',
            'Kinetic Façade Horizontal Independent Pivot Shading System',
            'Kinetic Façade Horizontal Multiple Pivot Shading System',
            'Minimal Curtain Wall'
        ],
        image: 'assets/spcl.jpg'
    },
    { 
        name: 'ACP Works', 
        location: 'Aluminum Products',
        type: 'Cladding – Customized',
        description: 'ACP cladding for interior and exterior use. Includes Fire Rated (FR A2) and Non-Fire Rated certified panels, installed on stainless steel frames.',
        features: ['Fire Rated ACP FR A2', 'Non-Fire Rated Certified Panels', 'Stainless Steel Subframe', 'Architectural Finishes'],
        image: 'assets/acp.png'
    },
    { 
        name: 'Stainless Steel Work', 
        location: 'Steel Products',
        type: 'Metal Fabrication – Customized',
        description: 'Custom stainless steel fabrication including handrails, staircases, and doors. Available in fire-rated and bulletproof versions.',
        features: ['Fire-Rated Steel Options', 'Bulletproof Steel Available', 'Decorative & Structural Fabrication'],
        image: 'assets/stnls.jpg'
    },
    { 
        name: 'Steel Works', 
        location: 'Steel Products',
        type: 'Metal Fabrication – Customized',
        description: 'Full steel fabrication for architectural and industrial projects. Includes fire-rated, bulletproof, and structural systems.',
        features: ['Fire-Rated & Bulletproof Steel', 'Industrial Frameworks', 'Decorative & Structural Components'],
        image: 'assets/STEELL.jpg'
    }
];

// Projects Data
const projects = [
    { name: 'Presidential Palace, Baabda', location: 'Baabda, Lebanon', image: 'assets/pres.png' },
    { name: 'Porte Emilio Resort & Hotel, Kaslik', location: 'Kaslik, Lebanon', image: 'assets/PORTEMILIO.jpg' },
    { name: 'Samaya Resort, Kaslik', location: 'Kaslik, Lebanon', image: 'assets/samaya.png' },
    { name: 'Camelot Hotel, Maamaltein', location: 'Maamaltein, Lebanon', image: 'assets/camilothotel.png' },
    { name: 'Mirza Buildings, Ballouneh', location: 'Ballouneh, Lebanon', image: 'assets/mirza.jpg' },
    { name: 'Tabarja Beach Resort, Tabarja', location: 'Tabarja, Lebanon', image: 'assets/tbrja.jpg' },
    { name: 'Albustan Hotel, Broumana', location: 'Broumana, Lebanon', image: 'assets/al bustan.jpg' },
    { name: 'Vary Foods Sarl, Awkar', location: 'Awkar, Lebanon', image: 'assets/varyfood.jpg' },
    { name: 'Salon Rita Tamer, Naccache', location: 'Naccache, Lebanon', image: 'assets/salonrita.jpg' },
    { name: 'Al Sharq, Kuwait', location: 'Kuwait', image: 'assets/al sharq.png' },
    { name: 'Painting School, Adma', location: 'Adma, Lebanon', image: 'assets/paaintingschol.jpg' },
    { name: 'Beirut Garden, Downtown', location: 'Downtown Beirut, Lebanon', image: 'assets/gardendt.jpg' },
    { name: 'Sawary Resort, Batroun', location: 'Batroun, Lebanon', image: 'assets/sawaya.jpg' },
    { name: 'MG Showroom, Zalka', location: 'Zalka, Lebanon', image: 'assets/mg.jpg' },
    { name: 'Lau Beirut, Hamra', location: 'Hamra, Beirut, Lebanon', image: 'assets/lauuu.png' },
    { name: 'Casino Du Liban, Tabarja', location: 'Tabarja, Lebanon', image: 'assets/casino.jpg' },
    { name: 'Hopital Saint Louis, Jounieh', location: 'Jounieh, Lebanon', image: 'assets/hosp.jpg' },
    { name: 'Kempenski Hotel, Congo', location: 'Congo', image: 'assets/kampinski.jpg' },
    { name: 'Phonecia Intercontinental, Beirut', location: 'Beirut, Lebanon', image: 'assets/phonecia.jpg' },
    { name: 'Elie Saab Boutique, Downtown', location: 'Downtown Beirut, Lebanon', image: 'assets/eluesaab.jpg' },
    { name: 'Elie Saab Home, Halat', location: 'Halat, Lebanon', image: 'assets/eluesaab.jpg' },
    { name: 'Carre Parfait, Adonis', location: 'Adonis, Lebanon', image: 'assets/carre.jpg' },
    { name: 'NC Jewelry, Ashrafieh Sassine', location: 'Ashrafieh Sassine, Beirut, Lebanon', image: 'assets/nc.png' },
    { name: 'Kfoury apartment,  bayada', location: ' bayada, Lebanon', image: 'assets/kfouryy.jpg' },
    { name: 'George Hakim Jewelery, Downtown', location: ' Downtown, Lebanon', image: 'assets/georgehakim.jpg' },
    { name: 'Baabda villa 3837', location: '  Baabda, Lebanon', image: 'assets/baabda.jpg' },
    { name: 'Feytroun villa 4502', location: ' Feytroun , Lebanon', image: 'assets/feytroun vlla.jpg' },
];

// Progress Bar
function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
}
window.addEventListener('scroll', updateProgressBar);

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('active');
    }
}

// Navigation Active State
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero-section');
function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}
window.addEventListener('scroll', updateActiveNav);

// Navigation Click Handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        scrollToSection(sectionId);
    });
});

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    const glassProducts = products.filter(p => p.location === 'Glass Products');
    const aluminumProducts = products.filter(p => p.location === 'Aluminum Products');
    const steelProducts = products.filter(p => p.location === 'Steel Products');

    const createCategoryHeader = (title) => {
        const header = document.createElement('h3');
        header.className = 'category-header';
        header.textContent = title;
        productsGrid.appendChild(header);
    };

    const createProductCard = (product) => {
        const productCard = document.createElement('div');
        productCard.className = 'project-card';
        productCard.style.setProperty('--bg-image', `url('${product.image}')`);
        productCard.innerHTML = `
            <div class="project-header">
                <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <svg class="project-link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </div>
            <div class="project-content">
                <p class="project-name">${product.name}</p>
                <p class="project-type">${product.type}</p>
            </div>
        `;
        productCard.addEventListener('click', () => openProjectModal(product));
        return productCard;
    };

    createCategoryHeader('Our Glasswork');
    glassProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });

    createCategoryHeader('Our Aluminum');
    aluminumProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });

    if (steelProducts.length > 0) {
        createCategoryHeader('Our Steelwork');
        steelProducts.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.setProperty('--bg-image', `url('${project.image}')`);
        projectCard.innerHTML = `
            <div class="project-header">
                <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <svg class="project-link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </div>
            <div class="project-content">
                <p class="project-name">${project.name}</p>
                <p class="project-type">${project.type || ''}</p>
            </div>
        `;
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Project Modal
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
function openProjectModal(project) {
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-title').textContent = project.name;
    document.getElementById('modal-location').textContent = `${project.location} • ${project.type || ''}`;
    document.getElementById('modal-description').textContent = project.description || '';
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    if (project.features) {
        project.features.forEach(feature => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'modal-feature';
            featureDiv.textContent = feature;
            featuresContainer.appendChild(featureDiv);
        });
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
modalClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Scroll Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-grid, .quality-item, .strategy-card, .production-category, .partners-grid, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadProjects();
    updateProgressBar();
    updateActiveNav();
});
