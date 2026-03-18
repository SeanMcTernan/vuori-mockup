import Image from 'next/image';
import NextImageCategoryTabs from './category-tabs';

const newArrivals = [
  { file: 'vw3015srb_sp26_w_bottoms_detail_8.png', alt: 'Villa Short', name: 'Villa Short', price: '$74' },
  {
    file: 'v302tbl_sp26_m_bottoms_detail_12_9dcaa480-9497-43f5-b198-be05a9f157e6.png',
    alt: 'Kore Short Lined 7 inches',
    name: 'Kore Short Lined 7"',
    price: '$78'
  },
  { file: 'sp26_look069_w_aaron_feaver_pasadena_00222.jpg', alt: 'Trestles Twill Wideleg', name: 'Trestles Twill Wideleg', price: '$148' },
  { file: 'v188tlh_sp26_m_tops_front_2.jpg', alt: 'Strato Tech Polo', name: 'Strato Tech Polo', price: '$68' },
  { file: 'vw303reh_sp26_w_bottoms_front_2.png', alt: 'Performance Jogger', name: 'Performance Jogger', price: '$110' },
  { file: 'sp26_d3_look058_m_aaron_feaver_goldstein_00502.jpg', alt: 'Kore Short Unlined 5 inches', name: 'Kore Short Unlined 5"', price: '$68' },
  { file: 'vw3176blk_sp26_w_bottoms_detail_12.png', alt: 'Luna Piped Short', name: 'Luna Piped Short', price: '$88' },
  {
    file: 'v1116tbl_sp26_m_tops_creative_11.jpg',
    alt: 'Sleeveless Viewpoint Muscle Tank 2.0',
    name: 'Sleeveless Viewpoint Muscle Tank 2.0',
    price: '$68'
  },
  { file: 'vw1011cer_sp26_w_tops_front_4.png', alt: 'Energy Tee', name: 'Energy Tee', price: '$58' },
  { file: 'v126tlh_sp26_m_tops_front_2.png', alt: 'Strato Tech Tee', name: 'Strato Tech Tee', price: '$58' }
];

function ResponsiveImagePair({ desktopFile, mobileFile, alt, className }) {
  return (
    <>
      <div className={`${className} desktop-image`}>
        <Image src={`/images/${desktopFile}`} alt={alt} fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className={`${className} mobile-image`}>
        <Image src={`/images/${mobileFile}`} alt={alt} fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
    </>
  );
}

export default function NextImageHome() {
  return (
    <>
      <div className="top-banner">Free Standard Shipping Over $75 | Free Returns</div>

      <div className="comparison-banner comparison-banner--nextimage">
        <span>Next/Image — images optimized by the Next.js built-in Image component.</span>
        <a href="/" className="comparison-link">View Netlify CDN Version →</a>
        <a href="/legacy" className="comparison-link">View Legacy Version →</a>
      </div>

      <header>
        <div className="header-inner">
          <div className="nav-left">
            <a className="logo" href="/nextimage" aria-label="Vuori home">
              <Image src="/images/vuori_gradient_logo.png" alt="Vuori" width={130} height={28} priority />
            </a>
            <nav>
              <ul className="nav-links">
                {['New', 'Women', 'Men', 'Accessories', 'Explore'].map((label) => (
                  <li key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="nav-right">
            <button aria-label="Search" type="button">
              <svg className="nav-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" /></svg>
            </button>
            <button aria-label="Account" type="button">
              <svg className="nav-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </button>
            <button aria-label="Cart" type="button">
              <svg className="nav-icon" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <ResponsiveImagePair
          desktopFile="0316_sp26_homepage_hero_villa_desktop.png"
          mobileFile="0316_sp26_homepage_hero_villa_mobile.png"
          alt="Villa Collection"
          className="hero-image"
        />
        <div className="hero-overlay">
          <p className="hero-eyebrow">New Collection</p>
          <h1 className="hero-title">The Villa<br />Collection</h1>
          <p className="hero-desc">Designed for warmth, movement, and life beyond the gym.</p>
          <div className="btn-row">
            <a href="#" className="btn-primary">Shop Women</a>
            <a href="#" className="btn-outline">Shop Men</a>
          </div>
        </div>
      </section>

      <section className="sub-hero">
        <div className="sub-hero-item">
          <div className="fill-image">
            <Image
              src="/images/0316_sp26_homepage_sub_metacotton_desktop.png"
              alt="Vuori Meta Cotton"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="sub-hero-overlay">
            <p className="sub-eyebrow">New Fabric</p>
            <h2 className="sub-title">Vuori Meta<br />Cotton</h2>
            <a href="#" className="btn-dark">Shop Now</a>
          </div>
        </div>
        <div className="sub-hero-item">
          <div className="fill-image">
            <Image
              src="/images/0316_sp26_homepage_sub_w_denim_desktop.png"
              alt="Vuori Wideleg Jean"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="sub-hero-overlay">
            <p className="sub-eyebrow">New Arrival</p>
            <h2 className="sub-title">The Vuori<br />Wideleg Jean</h2>
            <a href="#" className="btn-dark">Shop Now</a>
          </div>
        </div>
      </section>

      <section className="blissblend">
        <ResponsiveImagePair
          desktopFile="sp26_0223_homepage_blissblend_sub_desktop.png"
          mobileFile="sp26_0223_homepage_blissblend_sub_mobile.png"
          alt="Vuori BlissBlend"
          className="blissblend-image"
        />
        <div className="blissblend-overlay">
          <p className="blissblend-eyebrow">New Fabric Technology</p>
          <h2 className="blissblend-title">Vuori<br />BlissBlend</h2>
          <p className="blissblend-desc">Impossibly soft. Effortlessly versatile. Designed for every day.</p>
          <a href="#" className="btn-dark">Shop Now</a>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Popular Categories</h2>
        </div>
        <NextImageCategoryTabs />
      </section>

      <section className="arrivals-section">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
          <a href="#" className="view-all">View All</a>
        </div>
        <div className="product-grid">
          {newArrivals.map((product) => (
            <div className="product-card" key={product.file}>
              <div className="product-img-wrap">
                <Image
                  src={`/images/${product.file}`}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="footer-hero">
        <ResponsiveImagePair
          desktopFile="0213_homepage_footer_desktop.png"
          mobileFile="0213_homepage_footer_mobile.png"
          alt="A New Perspective On Performance Apparel"
          className="footer-hero-image"
        />
        <div className="footer-hero-overlay">
          <h2 className="footer-hero-title">A New Perspective On<br />Performance Apparel</h2>
          <div className="btn-row-center">
            <a href="#" className="btn-primary">Shop Women</a>
            <a href="#" className="btn-outline">Shop Men</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <Image src="/images/vuori_gradient_logo.png" alt="Vuori" width={112} height={24} />
              </div>
              <p>A new perspective on performance apparel. Made for a life in motion.</p>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {['Our Story', 'Sustainability', 'Careers', 'Our Stores', 'Events', 'ACTV Club'].map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                {['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact Us', 'Gift Cards'].map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                {["Men's", "Women's", 'Accessories', 'New Arrivals', 'Sale'].map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow</h4>
              <ul>
                {['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Pinterest'].map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Vuori, Inc. All Rights Reserved.</span>
            <div className="footer-social">
              {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
                <a href="#" key={item}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
