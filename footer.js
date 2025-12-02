class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #8B4513; /* Saddle brown */
color: #E5E7EB;
                    padding: 3rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #D4AF37; /* Gold */
                }
.footer-description {
                    color: #9CA3AF;
                    margin-bottom: 1.5rem;
                }
                
                .footer-heading {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .footer-link {
                    color: #9CA3AF;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-link:hover {
                    color: #D4AF37; /* Gold */
                }
.contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #9CA3AF;
                }
                .contact-icon {
                    color: #D4AF37; /* Gold */
                }
.payment-methods {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }
                .payment-method {
                    background-color: #654321; /* Dark brown */
color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.75rem;
                }
                
                .copyright {
                    grid-column: 1 / -1;
                    text-align: center;
                    color: #6B7280;
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid #654321; /* Dark brown */
}
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-about">
                    <div class="footer-logo">
                        <i data-feather="heart" class="footer-logo-icon"></i>
                        Thorough Care
                    </div>
                    <p class="footer-description">
                        Providing sanctuary and second careers for retired Philippine racehorses through donations, merchandise sales, and public education.
                    </p>
                </div>
                
                <div class="footer-links-section">
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="/about" class="footer-link">About Us</a>
                        <a href="/horses" class="footer-link">Our Horses</a>
                        <a href="/donate" class="footer-link">Donate</a>
                        <a href="/shop" class="footer-link">Shop</a>
                        <a href="/visit" class="footer-link">Visit Us</a>
                    </div>
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-heading">Contact Us</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i data-feather="mail" class="contact-icon"></i>
                            <span>mvbisares12@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i data-feather="map-pin" class="contact-icon"></i>
                            <span>Brgy. Santa Rosa, Bangued, Abra, 2800, Philippines</span>
                        </div>
                    </div>
                </div>
                
                <div class="footer-payments">
                    <h3 class="footer-heading">Payment Methods</h3>
                    <div class="payment-methods">
                        <span class="payment-method">BDO</span>
                        <span class="payment-method">PNB</span>
                        <span class="payment-method">GCash</span>
                        <span class="payment-method">Maya</span>
                        <span class="payment-method">GoThyme</span>
                        <span class="payment-method">Cash</span>
                    </div>
                </div>
                
                <div class="copyright">
                    © ${new Date().getFullYear()} Thorough Care. All rights reserved.
                </div>
            </div>
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

customElements.define('custom-footer', CustomFooter);