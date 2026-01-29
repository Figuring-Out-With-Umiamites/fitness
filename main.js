/**
 * Premium Fitness Trainer One-Pager
 * Minimal, Apple-like Design
 */

const APP_SELECTOR = '#main-content';
const STICKY_CTA_SELECTOR = '#sticky-cta';
const LOADER_SELECTOR = '#loader';

const ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    shoe: '<svg viewBox="0 0 24 24"><path d="M18,20h-5v-1.12l-1.67-1.11C11.11,17.61,10.87,17.5,10.63,17.5c-0.34,0-0.67,0.11-0.96,0.32L7,19.82V21h12V20z M21,8.34l-3-2V4h-2v1.51L12.55,3.6C12.21,3.48,11.85,3.45,11.5,3.5l-5.63,0.8 C4.27,4.53,3.22,5.75,3.01,7.36L2.61,10.5C2.39,12.28,3.29,14,4.93,14.64L6,15.06V21c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1v-4.59 l2.08-1.57C23.23,13.98,24,12.57,24,10.83C24,9.66,22.75,8.88,21,8.34z"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
    timer: '<svg viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7-7 7z"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000 1.41.996.996 0 001.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06z"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
};

async function init() {
    // 1. Try getting username from path
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(segment => segment.length > 0 && segment !== 'index.html');

    let username = null;
    if (pathSegments.length > 0) {
        username = pathSegments[0];
    }

    // 2. Fallback to query param if not in path
    if (!username) {
        const params = new URLSearchParams(window.location.search);
        username = params.get('u');
    }

    // Fallback logic: if no user, render marketing page
    if (!username) {
        document.title = "CreatorHQ | Create Your Portfolio";
        initTheme(); // Ensure theme is initialized
        renderMarketingPage();
        revealContent();
        return;
    }

    const dataPath = `/data/${username}`;

    try {
        const response = await fetch(`${dataPath}/config.json`);
        if (!response.ok) throw new Error('Trainer not found');
        const config = await response.json();

        document.title = `${config.name} | ${config.title}`;

        renderApp(config, dataPath);
        initTheme();
        initObserver();
        initTestimonialCarousel();
        initNavScroll();
        initLazyImages();
        revealContent();
    } catch (error) {
        console.error(error);
        renderError();
    }
}


function renderApp(config, basePath) {
    const main = document.querySelector(APP_SELECTOR);

    main.innerHTML = `
        ${renderNav(config.menu)}
        ${renderHero(config.hero, basePath, config.contacts)}
        ${renderAbout(config.about, config.experience, basePath)}
        ${config.gallery ? renderGallery(config.gallery, basePath) : ''}
        ${renderWhoIsThisFor(config.who_is_for)}
        ${renderTransformations(config.transformations, basePath)}
        ${renderTestimonials(config.testimonials)}
        ${renderFAQs(config.faqs)}
        ${renderContact(config.programs, config.contacts)}
        ${renderFooter(config.name)}
        ${renderFloatingActions(config.contacts)}
    `;
}

function renderHero(hero, basePath, contacts) {
    const hasVisual = hero.hero_visual ? true : false;
    const visualUrl = hasVisual ? `${basePath}/assets/${hero.hero_visual}` : '';

    return `
        <section id="hero" class="section-padding" style="min-height: 85vh; display: flex; align-items: center; position: relative; overflow: hidden;">
            <div class="container hero-container">
                <div class="hero-content">
                    <h1 class="text-hero" style="margin-bottom: 1.5rem;">${hero.headline}</h1>
                    <p class="text-subtitle" style="max-width: 650px; margin-bottom: 2.5rem;">${hero.subheadline}</p>
                    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: ${hasVisual ? 'flex-start' : 'center'};">
                        <a href="#contact" class="btn-primary">${hero.cta_text}</a>
                        ${contacts && contacts.instagram ? `
                        <a href="${contacts.instagram}" target="_blank" class="hero-instagram-link" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-muted); text-decoration: none; font-size: 0.9375rem; transition: var(--transition-smooth);">
                            <span style="width: 20px; height: 20px; fill: currentColor; display: flex; align-items: center; justify-content: center;">
                                ${ICONS.instagram}
                            </span>
                            <span>DM for details</span>
                        </a>
                        ` : ''}
                    </div>
                </div>
                ${hasVisual ? `
                <div class="hero-visual">
                    <div style="position: relative;">
                        <img src="${visualUrl}" alt="Hero Visual" class="fade-in-up" style="width: 100%; max-width: 500px; display: block; height: auto; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);" fetchpriority="high" decoding="async">
                    </div>
                </div>
                ` : ''}
            </div>

            <style>
                .hero-container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    align-items: center;
                    max-width: ${hasVisual ? '1100px' : '900px'};
                }
                
                .hero-content {
                    text-align: ${hasVisual ? 'left' : 'center'};
                }

                .hero-visual {
                    display: flex;
                    justify-content: center;
                    perspective: 1000px;
                }
                
                .hero-visual img {
                    transition: transform 0.5s ease;
                }
                
                .hero-visual:hover img {
                    transform: scale(1.02) rotate(1deg);
                }

                .hero-instagram-link:hover {
                    color: var(--text-main);
                    transform: translateX(2px);
                }

                .hero-instagram-link svg {
                    transition: transform 0.3s ease;
                }

                .hero-instagram-link:hover svg {
                    transform: scale(1.1);
                }

                @media (min-width: 900px) {
                     .hero-container {
                        grid-template-columns: ${hasVisual ? '1fr 1fr' : '1fr'};
                     }
                }

                @media (max-width: 899px) {
                    .hero-container {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .hero-content {
                        text-align: center;
                        margin: 0 auto;
                    }
                    .hero-content p {
                         margin-left: auto;
                         margin-right: auto;
                    }
                    .hero-content > div {
                        align-items: center !important;
                    }
                    .hero-visual {
                        margin-top: 2rem;
                    }
                }
            </style>
        </section>
    `;
}

function renderAbout(about, experience, basePath) {
    return `
        <section id="about" class="section-padding">
            <div class="container">
                <h2 class="text-title" style="margin-bottom: 3rem; text-align: center;">About ${about.name || 'Me'}</h2>
                <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; margin-bottom: 4rem;">
                    <div style="order: 2;">
                        <img src="${basePath}/assets/${about.image}" 
                             style="width: 100%; max-width: 500px; border-radius: var(--border-radius); display: block; margin: 0 auto;" 
                             alt="About ${about.name || 'trainer'}" 
                             loading="lazy" 
                             decoding="async">
                    </div>
                    <div style="order: 1;">
                        <div style="max-width: 600px;">
                            ${about.intro ? about.intro.map(paragraph => `
                                <p class="text-subtitle" style="margin-bottom: 1.5rem; font-size: 1.0625rem;">${paragraph}</p>
                            `).join('') : `
                                <p class="text-subtitle" style="margin-bottom: 1.5rem; font-size: 1.0625rem;">${about.story}</p>
                            `}
                        </div>
                    </div>
                </div>


                <!-- Merged Experience Stats -->
                <div class="experience-grid" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 800px; margin: 0 auto;">
                    ${experience.map(s => `
                        <div class="stat-card">
                            <div class="stat-value">${s.value}</div>
                            <div class="stat-label">${s.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        
        <style>
            @media (min-width: 768px) {
                #about > .container > div:first-of-type {
                    grid-template-columns: 1fr 1fr !important;
                }
                #about > .container > div:first-of-type > div:first-child {
                    order: 1 !important;
                }
                #about > .container > div:first-of-type > div:last-child {
                    order: 2 !important;
                }
            }
            @media (min-width: 640px) {
                #about .experience-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 2rem !important;
                }
            }
        </style>
    `;
}

function renderGallery(gallery, basePath) {
    return `
        <section id="gallery" class="section-padding bg-gray">
            <div class="container">
                <h2 class="text-title" style="margin-bottom: 3rem; text-align: center;">Gallery</h2>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                    ${gallery.images.map(img => {
        const isGif = img.toLowerCase().endsWith('.gif');
        return `
                        <div style="overflow: hidden; border-radius: var(--border-radius); aspect-ratio: 1; cursor: pointer; transition: var(--transition-smooth);" 
                             onmouseover="this.style.transform='scale(1.02)'" 
                             onmouseout="this.style.transform='scale(1)'">
                            <img src="${basePath}/assets/${img}" 
                                 style="width: 100%; height: 100%; object-fit: cover; display: block;" 
                                 alt="Gallery ${isGif ? 'animation' : 'image'}" 
                                 loading="lazy" 
                                 decoding="async">
                        </div>
                    `;
    }).join('')}
                </div>
            </div>
        </section>

        <style>
            @media (min-width: 640px) {
                #gallery > .container > div {
                grid-template-columns: repeat(3, 1fr) !important;
                }
            }
            @media (min-width: 1024px) {
                #gallery > .container > div {
                grid-template-columns: repeat(4, 1fr) !important;
                }
            }
        </style>
    `;
}



function renderContact(programs, contacts) {
    return `
        <section id="contact" class="section-padding bg-gray">
            <div class="container" style="max-width: 900px;">
                <h2 class="text-title" style="margin-bottom: 1.5rem; text-align: center;">Ready to Transform?</h2>
                <p class="text-subtitle" style="text-align: center; margin-bottom: 3rem;">Choose your path and let's begin your journey to mastery.</p>

                <div class="card" style="margin-bottom: 3rem;">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1.5rem;">Available Programs</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        ${programs.map(p => `
                            <li style="padding: 1.25rem 0; border-bottom: 1px solid var(--border-color);">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
                                    <div style="flex: 1; min-width: 200px;">
                                        <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">${p.title}</h4>
                                        <p style="color: var(--text-muted); margin-bottom: 0.5rem; line-height: 1.6; font-size: 0.9375rem;">${p.outcome}</p>
                                        <span class="text-small">Level: ${p.level}</span>
                                    </div>
                                    ${p.price ? `
                                    <div style="text-align: right;">
                                        <span style="font-size: 1.5rem; font-weight: 700; color: var(--color-red-primary);">${p.price}</span>
                                    </div>
                                    ` : ''}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div style="text-align: center;">
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1.5rem;">Get in Touch</h3>
                    <div class="contact-buttons">
                        <a href="${contacts.whatsapp}" target="_blank" class="btn-primary btn-contact" aria-label="WhatsApp">
                            ${ICONS.whatsapp}
                            <span class="btn-text">WhatsApp</span>
                        </a>
                        <a href="${contacts.instagram}" target="_blank" class="btn-secondary btn-contact" aria-label="Instagram">
                            ${ICONS.instagram}
                            <span class="btn-text">Instagram</span>
                        </a>
                        <a href="mailto:${contacts.email}" class="btn-secondary btn-contact" aria-label="Email">
                            ${ICONS.email}
                            <span class="btn-text">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        `;
}

function renderTransformations(items, basePath) {
    return `
        <section id="transformations" class="section-padding">
            <div class="container" style="max-width: 900px;">
                <h2 class="text-title" style="margin-bottom: 3rem;">Transformations</h2>
                <div style="display: grid; gap: 1.5rem;">
                    ${items.map(t => `
                        <div class="card" style="padding: 0; overflow: hidden; max-width: 500px; margin: 0 auto; width: 100%;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border-color);">
                                <img src="${basePath}/assets/${t.before}" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; display: block;" alt="Before" loading="lazy" decoding="async">
                                <img src="${basePath}/assets/${t.after}" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; display: block;" alt="After" loading="lazy" decoding="async">
                            </div>

                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        `;
}

function renderTestimonials(quotes) {
    const stars = `<div style="display: flex; gap: 0.25rem; margin-bottom: 1rem; justify-content: center;">
        ${Array(5).fill(`<div style="width: 20px; height: 20px; fill: #FBBF24;">${ICONS.star}</div>`).join('')}
    </div>`;

    return `
        <section id="testimonials" class="section-padding bg-gray">
            <div class="container">
                <h2 class="text-title" style="margin-bottom: 3rem; text-align: center;">Success Stories</h2>
                <div class="testimonial-carousel">
                    <div class="testimonial-track" id="testimonial-track">
                        ${quotes.map((q, index) => `
                            <div class="testimonial-slide">
                                <div class="card" style="max-width: 800px; margin: 0 auto; text-align: center;">
                                    ${stars}
                                    <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 1.5rem; color: var(--text-muted); font-style: italic;">"${q.quote}"</p>
                                    <cite style="font-size: 0.875rem; font-weight: 600; font-style: normal; color: var(--text-main); text-transform: uppercase; letter-spacing: 0.05em;">— ${q.name}</cite>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="testimonial-dots" id="testimonial-dots">
                        ${quotes.map((_, index) => `
                            <button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to testimonial ${index + 1}"></button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
        `;
}

function renderFAQs(faqs) {
    return `
        <section id="faq" class="section-padding">
            <div class="container" style="max-width: 800px;">
                <h2 class="text-title" style="margin-bottom: 3rem;">FAQ</h2>
                <div style="display: grid; gap: 1rem;">
                    ${faqs.map((f, i) => `
                        <details class="card" style="cursor: pointer; padding: 1.5rem;">
                            <summary style="font-weight: 500; font-size: 1.0625rem; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                                ${f.question}
                                <span style="color: var(--text-muted); font-size: 1.25rem; transition: transform 0.3s;">+</span>
                            </summary>
                            <p style="margin-top: 1rem; color: var(--text-muted); line-height: 1.7;">${f.answer}</p>
                        </details>
                    `).join('')}
                </div>
            </div>
        </section >
        `;
}

function renderFooter(name) {
    return `
        <footer class="border-top" style="padding: 3rem 0; text-align: center;">
            <div class="container">
                <p class="text-small" style="margin-bottom: 0.5rem;">&copy; ${new Date().getFullYear()} ${name}. All rights reserved.</p>
                <p class="text-small">
                    <a href="/" style="text-decoration: none; color: var(--text-muted); transition: color 0.2s;" onmouseover="this.style.color='var(--color-red-primary)'" onmouseout="this.style.color='var(--text-muted)'">
                        Made with love by CreatorHQ
                    </a>
                </p>
            </div>
        </footer>
    `;
}

function renderStickyCTA(contacts) {
    const cta = document.querySelector(STICKY_CTA_SELECTOR);
    cta.innerHTML = `
        <div class="cta-bar">
            <a href="${contacts.instagram}" target="_blank" class="btn-secondary">Instagram</a>
            <a href="${contacts.whatsapp}" target="_blank" class="btn-primary">WhatsApp</a>
            <a href="mailto:${contacts.email}" class="btn-secondary">Email</a>
        </div>
        `;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            cta.classList.add('active');
        } else {
            cta.classList.remove('active');
        }
    });
}

function initObserver() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card, .stat-card').forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });
}

function initTestimonialCarousel() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('.testimonial-dot');

    if (!track || dots.length === 0) return;

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let autoSlideInterval;

    const updateCarousel = (index) => {
        currentIndex = index;
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % dots.length;
        updateCarousel(nextIndex);
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    };

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Touch/Mouse events for swiping
    const handleStart = (e) => {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        stopAutoSlide();
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = currentX - startX;
        const offset = -currentIndex * 100 + (diff / track.offsetWidth) * 100;
        track.style.transform = `translateX(${offset}%)`;
    };

    const handleEnd = () => {
        if (!isDragging) return;
        isDragging = false;

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2;

        if (diff > threshold && currentIndex > 0) {
            updateCarousel(currentIndex - 1);
        } else if (diff < -threshold && currentIndex < dots.length - 1) {
            updateCarousel(currentIndex + 1);
        } else {
            updateCarousel(currentIndex);
        }

        startAutoSlide();
    };

    // Add event listeners
    track.addEventListener('mousedown', handleStart);
    track.addEventListener('mousemove', handleMove);
    track.addEventListener('mouseup', handleEnd);
    track.addEventListener('mouseleave', handleEnd);

    track.addEventListener('touchstart', handleStart, { passive: true });
    track.addEventListener('touchmove', handleMove, { passive: true });
    track.addEventListener('touchend', handleEnd);

    // Start auto-sliding
    startAutoSlide();

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
}

function revealContent() {
    const loader = document.querySelector(LOADER_SELECTOR);
    const main = document.querySelector(APP_SELECTOR);

    setTimeout(() => {
        loader.style.opacity = '0';
        main.style.opacity = '1';
        setTimeout(() => loader.remove(), 1000);
    }, 800);
}


function renderNav(menu) {
    if (!menu) return '';
    return `
        <nav id="nav-bar" class="nav-bar">
            <ul class="nav-menu">
                ${menu.map(item => `
                    <li><a href="${item.href}" class="nav-link">${item.label}</a></li>
                `).join('')}
                <li>
                    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
                        ${ICONS.sun}
                    </button>
                </li>
            </ul>
        </nav>
    `;
}

function initLazyImages() {
    // Add loaded class to lazy images when they finish loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}


function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const toggle = document.getElementById('theme-toggle');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    if (toggle) {
        toggle.innerHTML = savedTheme === 'dark' ? ICONS.sun : ICONS.moon;

        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';

            if (newTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                toggle.innerHTML = ICONS.sun;
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                toggle.innerHTML = ICONS.moon;
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

function renderWhoIsThisFor(items) {
    if (!items) return '';
    return `
        <section class="section-padding who-section">
             <div class="container">
                <h2 class="text-title" style="margin-bottom: 4rem; text-align: center; text-transform: uppercase; letter-spacing: 0.05em;">Who is this for?</h2>
                <div class="grid grid-cols-3" style="column-gap: 2rem;">
                    ${items.map(item => `
                        <div class="who-card">
                            <div class="who-icon">${ICONS[item.icon] || ''}</div>
                            <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase;">${item.title}</h3>
                            <p style="font-size: 0.9375rem; line-height: 1.6; max-width: 250px;">${item.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            <style>
               @media (max-width: 768px) {
                   .bg-dark .grid {
                       grid-template-columns: 1fr !important;
                       gap: 2rem;
                   }
               }
            </style>
        </section>
    `;
}

function renderFloatingActions(contacts) {
    if (!contacts) return '';
    return `
        <div class="floating-actions">
            ${contacts.instagram ? `
            <a href="${contacts.instagram}" target="_blank" class="floating-btn btn-instagram" aria-label="Follow on Instagram">
                ${ICONS.instagram}
            </a>
            ` : ''}
            ${contacts.whatsapp ? `
            <a href="${contacts.whatsapp}" target="_blank" class="floating-btn btn-whatsapp" aria-label="Chat on WhatsApp">
                ${ICONS.whatsapp}
            </a>
            ` : ''}
        </div>
    `;
}

function initNavScroll() {
    const nav = document.getElementById('nav-bar');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

function renderError() {
    document.body.innerHTML = `
        <div style="height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem;">
            <div>
                <h1 class="text-title" style="margin-bottom: 1rem;">Trainer Not Found</h1>
                <p class="text-subtitle" style="margin-bottom: 2rem;">The requested profile does not exist.</p>
                <a href="/demo" class="btn-primary">View Demo</a>
            </div>
        </div>
    `;
}


function renderMarketingPage() {
    const main = document.querySelector(APP_SELECTOR);
    const whatsappUrl = "https://wa.me/917459046896?text=Hi%2C%20I'm%20interested%20in%20getting%20my%20own%20page.";

    main.innerHTML = `
        <div style="min-height: 100vh; display: flex; flex-direction: column;">
            <!-- Simple Nav -->
            <nav style="padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center;">
                <div style="font-weight: 700; font-size: 1.25rem;">CreatorHQ</div>
                <button id="theme-toggle-marketing" class="theme-toggle" aria-label="Toggle theme">
                    ${ICONS.sun}
                </button>
            </nav>

            <!-- Hero Section -->
            <section class="section-padding" style="flex: 1; display: flex; align-items: center; justify-content: center; text-align: center;">
                <div class="container" style="max-width: 800px;">
                    <h1 class="text-hero" style="margin-bottom: 1.5rem; line-height: 1.1;">
                        Your Professional<br>
                        <span style="color: var(--color-red-primary);">Portfolio Platform</span>
                    </h1>
                    <p class="text-subtitle" style="margin-bottom: 3rem; font-size: 1.25rem;">
                        Create a stunning, brand-ready portfolio in minutes. Perfect for influencers, creators, and professionals.
                    </p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="${whatsappUrl}" target="_blank" class="btn-primary">Get Your Own Page</a>
                        <a href="/demo" class="btn-secondary">View Example</a>
                        <a href="#perfect-for" class="btn-secondary">Learn More</a>
                    </div>
                </div>
            </section>

            <!-- Perfect For Section -->
            <section id="perfect-for" class="section-padding who-section">
                <div class="container">
                    <h2 class="text-title" style="margin-bottom: 1rem; text-align: center;">Perfect For</h2>
                    <p class="text-subtitle" style="text-align: center; margin-bottom: 4rem;">
                        Whether you're an influencer, creator, or professional, we've got you covered
                    </p>
                    
                    <div class="grid grid-cols-2">
                        <!-- Card 1 -->
                        <div class="who-card" style="align-items: flex-start; text-align: left; padding: 2.5rem;">
                            <div class="who-icon" style="fill: #fbbf24;">
                                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Influencers</h3>
                            <p style="font-size: 1rem;">Showcase your content and attract brand partnerships</p>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="who-card" style="align-items: flex-start; text-align: left; padding: 2.5rem;">
                            <div class="who-icon" style="fill: #9ca3af;">
                                <svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Content Creators</h3>
                            <p style="font-size: 1rem;">Build your professional online presence</p>
                        </div>

                        <!-- Card 3 -->
                        <div class="who-card" style="align-items: flex-start; text-align: left; padding: 2.5rem;">
                            <div class="who-icon" style="fill: #f59e0b;">
                                <svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Fitness Coaches</h3>
                            <p style="font-size: 1rem;">Display your transformation stories and programs</p>
                        </div>

                        <!-- Card 4 -->
                        <div class="who-card" style="align-items: flex-start; text-align: left; padding: 2.5rem;">
                            <div class="who-icon" style="fill: #3b82f6;">
                                <svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1zM2 21h20c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z"/></svg>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Artists & Photographers</h3>
                            <p style="font-size: 1rem;">Create a stunning portfolio of your work</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer class="border-top" style="padding: 2rem 0; text-align: center; margin-top: auto;">
                <div class="container">
                    <p class="text-small">&copy; ${new Date().getFullYear()} CreatorHQ. All rights reserved.</p>
                </div>
            </footer>
        </div>
    `;

    // Initialize marketing theme toggle
    const toggle = document.getElementById('theme-toggle-marketing');
    if (toggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';

        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        toggle.innerHTML = savedTheme === 'dark' ? ICONS.sun : ICONS.moon;

        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';

            if (newTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                toggle.innerHTML = ICONS.sun;
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                toggle.innerHTML = ICONS.moon;
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
