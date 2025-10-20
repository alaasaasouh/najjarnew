// Products Data
const products = [
    // Glass Products
    { 
        name: 'Clear and Tinted Mirror', 
        location: 'Glass Products',
        type: 'Decorative',
        description: 'High-quality mirrors available in clear and various tinted colors. Used for interior design, vanity areas, and decorative wall features.',
        features: ['Clear and Tinted Options', 'High Reflectivity', 'Custom Sizing'],
        image: 'assets/clearandtinted.jpg'
    },
    { 
        name: 'Vitrail', 
        location: 'Glass Products',
        type: 'Artistic',
        description: 'Traditional or modern stained glass art, custom-designed for decorative windows, doors, and partitions.',
        features: ['Custom Artistic Designs', 'Colored Glass', 'Light Diffusion'],
        image: 'assets/vitrail.jpg'
    },
    { 
        name: 'UV Printing', 
        location: 'Glass Products',
        type: 'Customization',
        description: 'High-resolution UV printing directly onto glass surfaces for custom graphics, logos, and photographic images with durable, vibrant colors.',
        features: ['High-Resolution Graphics', 'Durable and Vibrant Colors', 'Custom Logos and Images'],
        image: 'assets/uv.png'
    },
    { 
        name: 'Shower Tray', 
        location: 'Glass Products',
        type: 'Bathroom',
        description: 'Custom-designed glass shower trays and enclosures, offering a modern, seamless, and easy-to-clean solution for bathrooms.',
        features: ['Custom Enclosures', 'Seamless Design', 'Easy to Clean'],
        image: 'assets/shower.jpg'
    },
    { 
        name: 'Glass Tables', 
        location: 'Glass Products',
        type: 'Furniture',
        description: 'Custom-fabricated glass tabletops and furniture, including tempered and laminated options for safety and durability.',
        features: ['Custom Tabletops', 'Tempered Safety Glass', 'Modern Furniture Design'],
        image: 'assets/table.jpg'
    },
    { 
        name: 'Float Glass', 
        location: 'Glass Products',
        type: 'Basic',
        description: 'Float glass is the most widely used type of glass in modern glazing systems. It is produced through the float process,.',
        features: ['High Optical Clarity', 'Consistent Thickness', 'Versatile Base Material', 'Thickness: 4mm to 19mm'],
        image: 'assets/floatglass.jpg'
    },
    { 
        name: 'Tinted Glass', 
        location: 'Glass Products',
        type: 'Solar Control',
        description: 'High-quality glass with added metal oxides for a distinctive tinted appearance (grey, bronze, green, blue). Reduces solar heat and glare, improving energy efficiency.',
        features: ['Reduces Solar Heat', 'Glare Control', 'Aesthetic Appeal'],
        image: 'assets/tinedglass.jpg'
    },
    { 
        name: 'Ultra Clear Glass (Crystal)', 
        location: 'Glass Products',
        type: 'Premium',
        description: 'Ultra clear float glass, also known as low-iron glass,',
        features: ['Exceptional Transparency', 'Color Neutrality', 'Superior Light Transmission', 'Thickness: 4mm to 19mm'],
        image: 'assets/ultraclear.png'
    },
    { 
        name: 'Reflective Glass', 
        location: 'Glass Products',
        type: 'Solar Control / Privacy',
        description: 'Coated with a thin layer of metallic oxide for a mirror-like appearance. Reduces solar heat gain and glare, and provides daytime privacy.',
        features: ['Mirror-like Reflection', 'Daytime Privacy', 'Energy Efficient'],
        image: 'assets/reflective.jpg.png'
    },
    { 
        name: 'Low-E Glass', 
        location: 'Glass Products',
        type: 'Energy Efficient',
        description: 'Low-Emissivity glass with a microscopically thin metallic oxide coating. Reflects infrared heat energy to keep interiors cooler in summer and warmer in winter.',
        features: ['Reduces Heat Transfer', 'Maximum Light Transmission', 'Improved Thermal Insulation'],
        image: 'assets/lowe.jpg'
    },
    { 
        name: 'Tempered Glass', 
        location: 'Glass Products',
        type: 'Safety Glass',
        description: 'Heat-treated safety glass, up to five times stronger than ordinary glass. Shatters into small, blunt fragments when broken, reducing injury risk.',
        features: ['5x Stronger than Standard Glass', 'High Impact Resistance', 'Safety Fragmentation'],
        image: 'assets/temperedglass.jpg'
    },
    { 
        name: 'Decorative Glass', 
        location: 'Glass Products',
        type: 'Aesthetic',
        description: 'Glass with various treatments, textures, patterns, or colors (Frosted, Etched, Fluted, Fused). Combines functionality with aesthetic design for interiors and facades.',
        features: ['Custom Patterns', 'Artistic Designs', 'Privacy and Light Diffusion'],
        image: 'assets/curve.png'
    },
    { 
        name: 'Laminated Glass', 
        location: 'Glass Products',
        type: 'Safety & Security',
        description: 'Two or more sheets of glass bonded with a PVB/EVA interlayer. Remains intact when broken, offering excellent safety, security, sound insulation, and 99% UV protection.',
        features: ['Remains Intact When Broken', 'Excellent Sound Insulation', '99% UV Protection'],
        image: 'assets/leminated.jpg'
    },
    { 
        name: 'Bullet Proof Glass', 
        location: 'Glass Products',
        type: 'Ballistic Security',
        description: 'Multi-layered system designed to resist the impact of bullets and projectiles. Classified by protection levels (B1 to B7) to meet international ballistic standards.',
        features: ['Ballistic Resistance (B1-B7)', 'High Optical Clarity', 'Security Glazing'],
        image: 'assets/bulletproof.png'
    },
    { 
        name: 'Fire Rated Glass', 
        location: 'Glass Products',
        type: 'Safety',
        description: 'Engineered to resist the passage of fire, heat, and smoke for a specified period (30 to 120 minutes). Essential for fire doors, partitions, and stairwells.',
        features: ['Fire Resistance (EI30-EI120)', 'Heat and Smoke Barrier', 'Certified Safety Solution'],
        image: 'assets/fire.png'
    },
    { 
        name: 'Curved Glass', 
        location: 'Glass Products',
        type: 'Architectural',
        description: 'Architectural glass thermally or mechanically shaped to create a gentle or pronounced curve. Used for unique design elements, facades, and interiors.',
        features: ['Unique Architectural Shapes', 'Thermal or Mechanical Shaping', 'Design Flexibility'],
        image: 'assets/curves.png'
    },
    // Aluminum and Steel Products
    { 
        name: 'Curtain Wall Systems', 
        location: 'Aluminum Products',
        type: 'Facade',
        description: 'Advanced aluminum facade systems including Stick and Unitized systems. Provides structural integrity, weather resistance, and thermal performance for large buildings.',
        features: ['Stick systems', 'Unitized systems'],
        image: 'assets/curtain.jpg'
    },
    { 
        name: 'Window Systems', 
        location: 'Aluminum Products',
        type: 'Openings',
        description: 'Comprehensive range of aluminum window solutions: Casement, Sliding, Tilt & Turn, and Minimalist systems, offering superior insulation and operation.',
        features: ['Casement windows', 'Sliding windows', 'Tilt & turn windows', 'Minimalist System'],
        image: 'assets/window.jpg'
    },
    { 
        name: 'Door Systems', 
        location: 'Aluminum Products',
        type: 'Openings',
        description: 'Aluminum door solutions including Swing, Sliding, Automatic, and Minimalist doors, designed for high traffic and aesthetic appeal.',
        features: ['Swing doors', 'Sliding doors', 'Automatic doors', 'Minimalist doors'],
        image: 'assets/siding.jpg'
    },
    { 
        name: 'Partition & Interior Systems', 
        location: 'Aluminum Products',
        type: 'Interior',
        description: 'Custom aluminum and glass systems for interior partitioning, creating modern and flexible office or residential spaces.',
        features: ['Glass Partitions', 'Aluminum Frames', 'Flexible Layouts'],
        image: 'assets/image-006.png'
    },
    { 
        name: 'Roofing & Skylight Systems', 
        location: 'Aluminum Products',
        type: 'Overhead',
        description: 'Durable and weather-resistant aluminum systems for roofing and skylights, providing natural light and structural integrity.',
        features: ['Weather-Resistant', 'Natural Light', 'Structural Integrity'],
        image: 'assets/sky.jpg'
    },
    { 
        name: 'Specialized Aluminum Systems', 
        location: 'Aluminum Products',
        type: 'Specialty',
        description: 'Advanced aluminum solutions including sliding, folding, and bi-folding systems, shading devices, louvers, and structural glazing.',
        features: ['Sliding, folding, and bi-folding systems', 'Shading devices and louvers', 'Structural glazing systems', 'Folding Aluminum system', '5 rails aluminum system'],
        image: 'assets/image-006.png'
    },
    { 
        name: 'Stainless Steel Work', 
        location: 'Steel Products',
        type: 'Metal Fabrication',
        description: 'Custom fabrication of stainless steel elements: Handrails, balustrades, staircases, doors, and decorative cladding for high-end interior and exterior use.',
        features: ['Handrails, balustrades, and staircases', 'Doors, frames, and façades', 'Cladding, canopies, and decorative elements'],
        image: 'assets/3d_asset_2.png'
    },
    { 
        name: 'Steel Works', 
        location: 'Steel Products',
        type: 'Metal Fabrication',
        description: 'Comprehensive steel fabrication services for structural and architectural applications.',
        features: ['Structural frameworks', 'Doors, gates, and window frames', 'Handrails, staircases, and balustrades', 'Cladding, canopies, and metal partitions', 'Industrial equipment and support structures'],
        image: 'assets/3d_asset_2.png'
    },
    { 
        name: 'ACP Works', 
        location: 'Aluminum Products',
        type: 'Cladding',
        description: 'Exterior cladding and façades using Aluminum Composite Panels (ACP) for commercial and residential buildings.',
        features: ['Exterior cladding and façades', 'Interior wall panels and partitions', 'Signage, canopies, and false ceilings', 'Corporate branding and decorative features'],
        image: 'assets/image-006.png'
    }
];

// Projects Data
const projects = [
    { 
        name: 'Presidential Palace, Baabda', 
        location: 'Baabda, Lebanon',
        type: 'Government Building',
        description: 'A prestigious project featuring state-of-the-art aluminum and glass facades for the Presidential Palace.',
        features: ['Curtain Walls', 'Security Glass', 'Custom Aluminum Frames'],
        image: 'assets/pres.png'
    },
    { 
        name: 'Porte Emilio Resort & Hotel, Kaslik', 
        location: 'Kaslik, Lebanon',
        type: 'Hospitality',
        description: 'Luxury resort with expansive glass structures and modern aluminum installations.',
        features: ['Floor-to-Ceiling Glass', 'Frameless Systems', 'Pool Enclosures'],
        image: 'assets/PORTEMILIO.jpg'
    },
    { 
        name: 'Samaya Resort, Kaslik', 
        location: 'Kaslik, Lebanon',
        type: 'Hospitality',
        description: 'High-end resort featuring elegant glass and aluminum architectural elements.',
        features: ['Skylights', 'Glass Balustrades', 'Aluminum Cladding'],
        image: 'assets/samaya.png'
    },
    { 
        name: 'Camelot Hotel, Maamaltein', 
        location: 'Maamaltein, Lebanon',
        type: 'Hospitality',
        description: 'Boutique hotel with sophisticated glass facades and custom aluminum work.',
        features: ['Custom Windows', 'Glass Doors', 'Decorative Panels'],
        image: 'assets/camilothotel.png'
    },
    { 
        name: 'Mirza Buildings, Ballouneh', 
        location: 'Ballouneh, Lebanon',
        type: 'Commercial',
        description: 'Modern commercial complex with innovative glass and aluminum solutions.',
        features: ['Structural Glazing', 'Aluminum Composite Panels', 'Energy-Efficient Glass'],
        image: 'assets/mirza.jpg'
    },
    { 
        name: 'Tabarja Beach Resort, Tabarja', 
        location: 'Tabarja, Lebanon',
        type: 'Hospitality',
        description: 'Beachfront resort with stunning glass installations and weather-resistant aluminum.',
        features: ['Marine-Grade Aluminum', 'Tempered Glass', 'Retractable Systems'],
        image: 'assets/tbrja.jpg'
    },
    { 
        name: 'Albustan Hotel, Broumana', 
        location: 'Broumana, Lebanon',
        type: 'Hospitality',
        description: 'Mountain hotel featuring panoramic glass walls and premium aluminum finishes.',
        features: ['Panoramic Windows', 'Thermal Glass', 'Powder-Coated Aluminum'],
        image: 'assets/al bustan.jpg'
    },
    { 
        name: 'Vary Foods Sarl, Awkar', 
        location: 'Awkar, Lebanon',
        type: 'Industrial',
        description: 'Food processing facility with specialized glass and aluminum installations.',
        features: ['Hygienic Glass Partitions', 'Industrial Doors', 'Aluminum Frames'],
        image: 'assets/varyfood.jpg'
    },
    { 
        name: 'Salon Rita Tamer, Naccache', 
        location: 'Naccache, Lebanon',
        type: 'Commercial',
        description: 'Upscale salon with elegant glass and mirror installations.',
        features: ['Decorative Mirrors', 'Glass Partitions', 'Custom Aluminum Fixtures'],
        image: 'assets/salonrita.jpg'
    },
    { 
        name: 'Al Sharq, Kuwait', 
        location: 'Kuwait',
        type: 'International',
        description: 'International project showcasing our expertise in aluminum and glass systems.',
        features: ['Desert-Grade Materials', 'UV-Resistant Glass', 'Aluminum Curtain Walls'],
        image: 'assets/al sharq.png'
    },
    { 
        name: 'Painting School, Adma', 
        location: 'Adma, Lebanon',
        type: 'Educational',
        description: 'Art school with natural light-optimized glass installations.',
        features: ['North-Facing Skylights', 'Acoustic Glass', 'Aluminum Frames'],
        image: 'assets/paaintingschol.jpg'
    },
    { 
        name: 'Beirut Garden, Downtown', 
        location: 'Downtown Beirut, Lebanon',
        type: 'Commercial',
        description: 'Urban garden complex with modern glass and aluminum architecture.',
        features: ['Glass Atriums', 'Aluminum Pergolas', 'Decorative Glass'],
        image: 'assets/gardendt.jpg'
    },
    { 
        name: 'Sawary Resort, Batroun', 
        location: 'Batroun, Lebanon',
        type: 'Hospitality',
        description: 'Coastal resort featuring innovative glass and aluminum solutions.',
        features: ['Sea-View Glass Walls', 'Corrosion-Resistant Aluminum', 'Sliding Systems'],
        image: 'assets/sawaya.jpg'
    },
    { 
        name: 'MG Showroom, Zalka', 
        location: 'Zalka, Lebanon',
        type: 'Commercial',
        description: 'Automotive showroom with expansive glass facades.',
        features: ['Structural Glass', 'Aluminum Storefront', 'Display Windows'],
        image: 'assets/mg.jpg'
    },
    { 
        name: 'Laubeirut, Hamra', 
        location: 'Hamra, Beirut, Lebanon',
        type: 'Commercial',
        description: 'Urban commercial space with contemporary glass and aluminum design.',
        features: ['Glass Storefronts', 'Aluminum Cladding', 'Automatic Doors'],
        image: 'assets/lauuu.png'
    },
    { 
        name: 'Casino Du Liban, Tabarja', 
        location: 'Tabarja, Lebanon',
        type: 'Entertainment',
        description: 'Iconic entertainment venue with spectacular glass and aluminum installations.',
        features: ['Decorative Glass', 'Aluminum Facades', 'Custom Metalwork'],
        image: 'assets/casino.jpg'
    },
    { 
        name: 'Hopital Saint Louis, Jounieh', 
        location: 'Jounieh, Lebanon',
        type: 'Healthcare',
        description: 'Medical facility with specialized glass and aluminum systems.',
        features: ['Fire-Rated Glass', 'Hygienic Surfaces', 'Aluminum Partitions'],
        image: 'assets/hosp.jpg'
    },
    { 
        name: 'Kempenski Hotel, Congo', 
        location: 'Congo',
        type: 'International',
        description: 'Luxury hotel project in Africa showcasing our international capabilities.',
        features: ['Tropical-Grade Materials', 'Hurricane-Resistant Glass', 'Premium Aluminum'],
        image: 'assets/kampinski.jpg'
    },
    { 
        name: 'Phonecia Intercontinental, Beirut', 
        location: 'Beirut, Lebanon',
        type: 'Hospitality',
        description: 'Five-star hotel with premium glass and aluminum installations.',
        features: ['Luxury Finishes', 'Soundproof Glass', 'Anodized Aluminum'],
        image: 'assets/phonecia.jpg'
    },
    { 
        name: 'Elie Saab Boutique, Downtown', 
        location: 'Downtown Beirut, Lebanon',
        type: 'Retail',
        description: 'High-fashion boutique with elegant glass and mirror work.',
        features: ['Display Glass', 'Decorative Mirrors', 'Luxury Aluminum Frames'],
        image: 'assets/eluesaab.jpg'
    },
    { 
        name: 'Elie Saab Home, Halat', 
        location: 'Halat, Lebanon',
        type: 'Residential',
        description: 'Designer residence with custom glass and aluminum features.',
        features: ['Floor-to-Ceiling Windows', 'Custom Mirrors', 'Architectural Aluminum'],
        image: 'assets/eluesaab.jpg'
    },
    { 
        name: 'Carre Parfait, Adonis', 
        location: 'Adonis, Lebanon',
        type: 'Commercial',
        description: 'Shopping center with modern glass and aluminum architecture.',
        features: ['Glass Storefronts', 'Aluminum Cladding', 'Skylights'],
        image: 'assets/carre.jpg'
    },
    { 
        name: 'NC Jewelry, Ashrafieh Sassine', 
        location: 'Ashrafieh Sassine, Beirut, Lebanon',
        type: 'Retail',
        description: 'Luxury jewelry store with secure glass and premium aluminum finishes.',
        features: ['Security Glass', 'Display Cases', 'Polished Aluminum'],
        image: 'assets/nc.png'
    }
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
    productsGrid.innerHTML = ''; // Clear existing content

    // Group products by location (Glass Products, Aluminum Products, Steel Products)
    const glassProducts = products.filter(p => p.location === 'Glass Products');
    const aluminumProducts = products.filter(p => p.location === 'Aluminum Products');
    const steelProducts = products.filter(p => p.location === 'Steel Products');

    // Function to create a category header
    const createCategoryHeader = (title) => {
        const header = document.createElement('h3');
        header.className = 'category-header';
        header.textContent = title;
        productsGrid.appendChild(header);
    };

    // Function to create a product card
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

    // 1. Our Glasswork
    createCategoryHeader('Our Glasswork');
    glassProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });

    // 2. Our Aluminum
    createCategoryHeader('Our Aluminum');
    aluminumProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });

    // 3. Our Steelwork (Optional, if any)
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
    
    projects.forEach((project, index) => {
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
                <p class="project-type">${project.type}</p>
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
    document.getElementById('modal-location').textContent = `${project.location} • ${project.type}`;
    document.getElementById('modal-description').textContent = project.description;
    
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    
    project.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'modal-feature';
        featureDiv.textContent = feature;
        featuresContainer.appendChild(featureDiv);
    });
    
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

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

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
    loadProducts(); // Load the new products section
    loadProjects();
    updateProgressBar();
    updateActiveNav();
});

