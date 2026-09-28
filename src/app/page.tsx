'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Papa from 'papaparse';

interface Product {
  sku: string;
  name: string;
  dealBadge: string;
  description: string;
  brand: string;
  productType: string;
  keyFeatures: string;
  targetAudience: string;
  rating: string;
  reviewCount: string;
  oldPrice: string;
  price: string;
  image: string;
  affiliateLink: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const GOOGLE_SHEET_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRwF_Hm6KeFkamiWx4Dt2eYhsbwQE_a5LNrGArfY7p_q5tDi8wnmzDiWsXs6jc2BhGxnI_HiUBPW7M/pub?output=csv';

  useEffect(() => {
    Papa.parse(GOOGLE_SHEET_CSV, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data.map((row: any) => ({
          sku: row['SKU'] || row['sku'] || '',
          name: row['Name'] || row['name'] || row['Product Name'] || '',
          dealBadge: row['Deal Badge'] || row['dealBadge'] || row['Badge'] || '',
          description: row['Description'] || row['description'] || '',
          brand: row['Brand'] || row['brand'] || '',
          productType: row['Product Type'] || row['productType'] || '',
          keyFeatures: row['Key Features'] || row['keyFeatures'] || '',
          targetAudience: row['Target Audience'] || row['targetAudience'] || '',
          rating: row['Rating'] || row['rating'] || '',
          reviewCount: row['Review Count'] || row['reviewCount'] || '',
          oldPrice: row['Old Price'] || row['oldPrice'] || '',
          price: row['Price'] || row['price'] || '',
          image: row['Image'] || row['image'] || row['Image URL'] || '',
          affiliateLink: row['Affiliate Link'] || row['affiliateLink'] || row['Link'] || '#',
          category: row['Category'] || row['category'] || '',
        }));
        setProducts(parsed);
        setLoading(false);
      },
      error: () => setLoading(false),
    });
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);

    return matchesQuery && matchesCategory && matchesBrand;
  });

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4T820CE8D3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4T820CE8D3');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yoobfo9827");
        `}
      </Script>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#fdfdfd', color: '#2c2c2c', minHeight: '100vh', lineHeight: 1.5 }}>
        {/* Header */}
        <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '15px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <a href="#" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, textDecoration: 'none', color: '#2c2c2c', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', background: '#000', borderRadius: '4px' }}></div>
            Eva's Trendify Hub
          </a>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="#about" style={{ background: '#a88548', color: '#fff', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>About Eva's Trendify Hub</a>
            <a href="#shop" style={{ background: '#a88548', color: '#fff', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>Shop by Category</a>
            <a href="#disclosure" style={{ background: '#a88548', color: '#fff', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>Affiliate Disclosure</a>
            <a href="#contact" style={{ background: '#a88548', color: '#fff', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>Contact Us</a>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ position: 'relative', height: '320px', background: "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat", display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', padding: '20px' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.4)' }}></div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, marginBottom: '8px' }}>Discover Your Style. Live Trendy.</h1>
            <p style={{ fontSize: '18px', fontWeight: 400, opacity: 0.95 }}>Curated premium products for modern lifestyles</p>
          </div>
        </section>

        {/* Intro Text */}
        <div style={{ maxWidth: '800px', margin: '30px auto', textAlign: 'center', color: '#666', fontSize: '14px', padding: '0 20px' }}>
          Welcome to Eva's Trendify Hub, your destination for discovering stylish, practical, and elevated finds from across the web. Browse a thoughtfully curated collection spanning fashion, home, pets, and more—then click to shop directly through our trusted affiliate partners.
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: '700px', margin: '0 auto 30px', padding: '0 20px' }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '12px 18px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
          />
        </div>

        {/* Main Content Container */}
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '30px', padding: '0 20px 50px' }}>
          {/* Sidebar */}
          <aside style={{ background: '#fff', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', height: 'fit-content' }}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>Category</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#666' }}>
                {['Fashion', 'Home & Garden', 'Animals & Pets', 'Coloring Books'].map((cat) => (
                  <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" onChange={() => handleCategoryChange(cat)} /> {cat}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>Brand</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#666' }}>
                {['Atelier North', 'Haven Form', 'Luna Edit', 'Meridian & Co.'].map((brand) => (
                  <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" onChange={() => handleBrandChange(brand)} /> {brand}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main>
            {loading ? (
              <p style={{ textAlign: 'center', color: '#666' }}>Loading products...</p>
            ) : filteredProducts.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#666' }}>No products found.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
                {filteredProducts.map((item, idx) => (
                  <div key={idx} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <img src={item.image || 'https://via.placeholder.com/300'} alt={item.name} style={{ width: '100%', height: '260px', objectFit: 'contain', padding: '10px', background: '#f8f9fa' }} />
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{item.name}</div>
                      {item.sku && <div style={{ fontSize: '11px', color: '#666', marginBottom: '6px' }}>{item.sku}</div>}
                      {item.dealBadge && <div style={{ display: 'inline-block', background: '#0066cc', color: '#fff', fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px', width: 'fit-content', marginBottom: '10px' }}>{item.dealBadge}</div>}
                      <div style={{ fontSize: '13px', color: '#666', marginBottom: '15px', flexGrow: 1 }}>{item.description}</div>

                      {item.brand && <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #f0f0f0', paddingBottom: '4px' }}><span style={{ color: '#666' }}>Brand:</span><span style={{ fontWeight: 600 }}>{item.brand}</span></div>}
                      {item.productType && <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #f0f0f0', paddingBottom: '4px' }}><span style={{ color: '#666' }}>Product Type:</span><span style={{ fontWeight: 600 }}>{item.productType}</span></div>}
                      {item.keyFeatures && <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #f0f0f0', paddingBottom: '4px' }}><span style={{ color: '#666' }}>Key Features:</span><span style={{ fontWeight: 600 }}>{item.keyFeatures}</span></div>}
                      {item.targetAudience && <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #f0f0f0', paddingBottom: '4px' }}><span style={{ color: '#666' }}>Target Audience:</span><span style={{ fontWeight: 600 }}>{item.targetAudience}</span></div>}
                      {item.rating && <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #f0f0f0', paddingBottom: '4px' }}><span style={{ color: '#666' }}>Rating:</span><span style={{ fontWeight: 600 }}>{item.rating}</span></div>}
                      {item.reviewCount && <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px dashed #f0f0f0', paddingBottom: '4px' }}><span style={{ color: '#666' }}>Review Count:</span><span style={{ fontWeight: 600 }}>{item.reviewCount}</span></div>}

                      <div style={{ margin: '15px 0', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        {item.oldPrice && <span style={{ textDecoration: 'line-through', color: '#666', fontSize: '13px' }}>{item.oldPrice}</span>}
                        <span style={{ fontSize: '20px', fontWeight: 700 }}>{item.price}</span>
                      </div>

                      <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', background: '#a88548', color: '#fff', textAlign: 'center', textDecoration: 'none', padding: '12px', borderRadius: '6px', fontWeight: 600, fontSize: '14px' }}>View Deal</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #e2e8f0', padding: '40px 20px', textAlign: 'center', background: '#fff', marginTop: '40px' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', marginBottom: '10px' }}>Find your next favorite thing</h3>
          <p style={{ fontSize: '13px', color: '#666', maxWidth: '700px', margin: '0 auto 15px' }}>
            From everyday essentials to statement-making discoveries, Eva's Trendify Hub makes it easy to browse curated products. Click <strong>View Deal</strong> when you find the perfect match.
          </p>
          <p style={{ fontSize: '13px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            © 2026 Eva's Trendify Hub. Curated product recommendations for modern living. Some links may be affiliate links, which means we may earn a commission at no additional cost to you.
          </p>
        </footer>
      </div>
    </>
  );
}
