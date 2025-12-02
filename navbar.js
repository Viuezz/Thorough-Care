class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: rgba(139, 69, 19, 0.9); /* Saddle brown with transparency */
backdrop-filter: blur(8px);
                }
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: white;
                    text-decoration: none;
                }
                .logo-icon {
                    margin-right: 0.5rem;
                    color: #D4AF37; /* Gold */
                }
.nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .nav-link {
                    color: #E5E7EB;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                .nav-link:hover {
                    color: #D4AF37; /* Gold */
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #D4AF37; /* Gold */
transition: width 0.3s;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo">
                    <i data-feather="heart" class="logo-icon"></i>
                    Thorough Care
                </a>
                
                <div class="nav-links">
                    <a href="/about" class="nav-link">About</a>
                    <a href="/horses" class="nav-link">Our Horses</a>
                    <a href="/donate" class="nav-link">Donate</a>
                    <a href="/shop" class="nav-link">Shop</a>
                    <a href="/visit" class="nav-link">Visit</a>
                    <a href="/contact" class="nav-link">Contact</a>
                </div>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
        
        // Initialize feather icons within shadow DOM
        const featherScript = document.createElement('script');
        featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
        this.shadowRoot.appendChild(featherScript);
        
        featherScript.onload = () => {
            if (window.feather) {
                window.feather.replace();
            }
        };
    }
}

customElements.define('custom-navbar', CustomNavbar);