<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eva's Trendify Hub | Discover Your Style. Live Trendy.</title>
  <meta name="description" content="Curated premium products for modern lifestyles. Browse fashion, home, accessories, and daily deals." />

  <!-- Google Analytics 4 (GA4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4T820CE8D3"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4T820CE8D3');
  </script>

  <!-- Microsoft Clarity -->
  <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "yoobfo9827");
  </script>

  <!-- PapaParse for parsing Google Sheet CSV -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>

  <!-- Google Fonts & Styling -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary-color: #a88548;
      --primary-hover: #917138;
      --text-dark: #2c2c2c;
      --text-muted: #666666;
      --bg-light: #fdfdfd;
      --card-bg: #ffffff;
      --border-color: #e2e8f0;
      --badge-blue: #0066cc;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: var(--bg-light); color: var(--text-dark); line-height: 1.5; }

    /* Top Navigation Header */
    header { background: #fff; border-bottom: 1px solid var(--border-color); padding: 15px 5%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; }
    .brand { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; text-decoration: none; color: var(--text-dark); display: flex; align-items: center; gap: 10px; }
    .brand-logo-placeholder { width: 28px; height: 28px; background: #000; border-radius: 4px; }
    
    .nav-buttons { display: flex; gap: 10px; flex-wrap: wrap; }
    .nav-btn { background: var(--primary-color); color: #fff; text-decoration: none; padding: 8px 16px; border-radius: 4px; font-size: 13px; font-weight: 600; transition: background 0.2s; }
    .nav-btn:hover { background: var(--primary-hover); }

    /* Hero Banner Overlay */
    .hero { position: relative; height: 320px; background: url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat; display: flex; align-items: center; justify-content: center; text-align: center; color: #fff; padding: 20px; }
    .hero::before { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4); }
    .hero-content { position: relative; z-index: 1; max-width: 800px; }
    .hero-content h1 { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 700; margin-bottom: 8px; }
    .hero-content p { font-size: 18px; font-weight: 400; opacity: 0.95; }

    /* Intro & Search Area */
    .intro-text { max-width: 800px; margin: 30px auto; text-align: center; color: var(--text-muted); font-size: 14px; padding: 0 20px; }
    .search-container { max-width: 700px; margin: 0 auto 30px; padding: 0 20px; }
    .search-input { width: 100%; padding: 12px 18px; border: 1px solid var(--border-color); border-radius: 6px; font-size: 14px; outline: none; }
    .search-input:focus { border-color: var(--primary-color); }

    /* Main Section Layout */
    .main-container { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 260px 1fr; gap: 30px; padding: 0 20px 50px; }

    /* Sidebar Filters */
    .sidebar { background: #fff; padding: 20px; border: 1px solid var(--border-color); border-radius: 8px; height: fit-content; }
    .filter-group { margin-bottom: 25px; }
    .filter-title { font-size: 14px; font-weight: 700; margin-bottom: 12px; display: flex; justify-content: space-between; }
    .filter-list { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: var(--text-muted); }
    .filter-item { display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .filter-item input { cursor: pointer; }

    /* Product Grid */
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; }
    .product-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
    .product-card:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
    
    .card-img { width: 100%; height: 260px; object-fit: cover; background: #f0f0f0; }
    .card-body { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
    .product-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 10px; }
    
    .sku-badge { font-size: 11px; color: var(--text-muted); margin-bottom: 6px; }
    .deal-badge { display: inline-block; background: var(--badge-blue); color: #fff; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 4px; width: fit-content; margin-bottom: 10px; }
    
    .product-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 15px; flex-grow: 1; }
    
    .meta-row { font-size: 12px; display: flex; justify-content: space-between; margin-bottom: 6px; border-bottom: 1px dashed #f0f0f0; padding-bottom: 4px; }
    .meta-label { color: var(--text-muted); }
    .meta-val { font-weight: 600; text-align: right; }

    .price-row { margin: 15px 0; display: flex; align-items: baseline; gap: 8px; }
    .old-price { text-decoration: line-through; color: var(--text-muted); font-size: 13px; }
    .current-price { font-size: 20px; font-weight: 700; color: var(--text-dark); }

    .deal-btn { display: block; width: 100%; background: var(--primary-color); color: #fff; text-align: center; text-decoration: none; padding: 12px; border-radius: 6px; font-weight: 600; font-size: 14px; transition: background 0.2s; }
    .deal-btn:hover { background: var(--primary-hover); }

    /* Footer */
    footer { border-top: 1px solid var(--border-color); padding: 40px 20px; text-align: center; background: #fff; margin-top: 40px; }
    footer h3 { font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 10px; }
    footer p { font-size: 13px; color: var(--text-muted); max-width: 700px; margin: 0 auto 15px; }

    @media (max-width: 768px) {
      .main-container { grid-template-columns: 1fr; }
      .hero-content h1 { font-size: 28px; }
    }
  </style>
</head>
<body>

  <!-- Header Navigation -->
  <header>
    <a href="#" class="brand">
      <div class="brand-logo-placeholder"></div>
      Eva's Trendify Hub
    </a>
    <div class="nav-buttons">
      <a href="#about" class="nav-btn">About Eva's Trendify Hub</a>
      <a href="#shop" class="nav-btn">Shop by Category</a>
      <a href="#disclosure" class="nav-btn">Affiliate Disclosure</a>
      <a href="#contact" class="nav-btn">Contact Us</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Discover Your Style. Live Trendy.</h1>
      <p>Curated premium products for modern lifestyles</p>
    </div>
  </section>

  <!-- Intro Text -->
  <div class="intro-text">
    Welcome to Eva's Trendify Hub, your destination for discovering stylish, practical, and elevated finds from across the web. Browse a thoughtfully curated collection spanning fashion, home, pets, and more—then click to shop directly through our trusted affiliate partners.
  </div>

  <!-- Search Bar -->
  <div class="search-container">
    <input type="text" id="searchInput" class="search-input" placeholder="What are you looking for?" onkeyup="filterProducts()" />
  </div>

  <!-- Main Content Layout -->
  <div class="main-container">
    <!-- Sidebar Filters -->
    <aside class="sidebar">
      <div class="filter-group">
        <div class="filter-title">Category</div>
        <div class="filter-list" id="categoryFilters">
          <label class="filter-item"><input type="checkbox" value="Fashion" onchange="filterProducts()"> Fashion</label>
          <label class="filter-item"><input type="checkbox" value="Home & Garden" onchange="filterProducts()"> Home & Garden</label>
          <label class="filter-item"><input type="checkbox" value="Animals & Pets" onchange="filterProducts()"> Animals & Pets</label>
          <label class="filter-item"><input type="checkbox" value="Coloring Books" onchange="filterProducts()"> Coloring Books</label>
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-title">Brand</div>
        <div class="filter-list" id="brandFilters">
          <label class="filter-item"><input type="checkbox" value="Atelier North" onchange="filterProducts()"> Atelier North</label>
          <label class="filter-item"><input type="checkbox" value="Haven Form" onchange="filterProducts()"> Haven Form</label>
          <label class="filter-item"><input type="checkbox" value="Luna Edit" onchange="filterProducts()"> Luna Edit</label>
          <label class="filter-item"><input type="checkbox" value="Meridian & Co." onchange="filterProducts()"> Meridian & Co.</label>
        </div>
      </div>
    </aside>

    <!-- Product Grid Area -->
    <main>
      <div class="product-grid" id="productGrid">
        <p style="grid-column: 1/-1; text-align: center; color: #666;">Loading products...</p>
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer>
    <h3>Find your next favorite thing</h3>
    <p>From everyday essentials to statement-making discoveries, Eva's Trendify Hub makes it easy to browse curated products. Click <strong>View Deal</strong> when you find the perfect match.</p>
    <p>© 2026 Eva's Trendify Hub. Curated product recommendations for modern living. Some links may be affiliate links, which means we may earn a commission at no additional cost to you.</p>
  </footer>

  <!-- Script to Dynamically Fetch and Render Google Sheet Data -->
  <script>
    const GOOGLE_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRwF_Hm6KeFkamiWx4Dt2eYhsbwQE_a5LNrGArfY7p_q5tDi8wnmzDiWsXs6jc2BhGxnI_HiUBPW7M/pub?output=csv';

    let products = [];

    function loadGoogleSheetData() {
      Papa.parse(GOOGLE_SHEET_CSV, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          products = results.data.map(row => ({
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
            category: row['Category'] || row['category'] || ''
          }));

          renderProducts(products);
        },
        error: function(err) {
          console.error("Error fetching Google Sheet CSV:", err);
          document.getElementById('productGrid').innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Failed to load products from Google Sheet.</p>';
        }
      });
    }

    function renderProducts(items) {
      const grid = document.getElementById('productGrid');
      grid.innerHTML = '';

      if (!items || items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No products found.</p>';
        return;
      }

      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${item.image || 'https://via.placeholder.com/300'}" alt="${item.name}" class="card-img" />
          <div class="card-body">
            <div class="product-title">${item.name}</div>
            ${item.sku ? `<div class="sku-badge">${item.sku}</div>` : ''}
            ${item.dealBadge ? `<div class="deal-badge">${item.dealBadge}</div>` : ''}
            <div class="product-desc">${item.description}</div>
            
            ${item.brand ? `<div class="meta-row"><span class="meta-label">Brand:</span><span class="meta-val">${item.brand}</span></div>` : ''}
            ${item.productType ? `<div class="meta-row"><span class="meta-label">Product Type:</span><span class="meta-val">${item.productType}</span></div>` : ''}
            ${item.keyFeatures ? `<div class="meta-row"><span class="meta-label">Key Features:</span><span class="meta-val">${item.keyFeatures}</span></div>` : ''}
            ${item.targetAudience ? `<div class="meta-row"><span class="meta-label">Target Audience:</span><span class="meta-val">${item.targetAudience}</span></div>` : ''}
            ${item.rating ? `<div class="meta-row"><span class="meta-label">Rating:</span><span class="meta-val">${item.rating}</span></div>` : ''}
            ${item.reviewCount ? `<div class="meta-row"><span class="meta-label">Review Count:</span><span class="meta-val">${item.reviewCount}</span></div>` : ''}

            <div class="price-row">
              ${item.oldPrice ? `<span class="old-price">${item.oldPrice}</span>` : ''}
              <span class="current-price">${item.price}</span>
            </div>

            <a href="${item.affiliateLink}" target="_blank" rel="noopener noreferrer" class="deal-btn">View Deal</a>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function filterProducts() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const selectedCategories = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(cb => cb.value);
      const selectedBrands = Array.from(document.querySelectorAll('#brandFilters input:checked')).map(cb => cb.value);

      const filtered = products.filter(item => {
        const matchesQuery = (item.name && item.name.toLowerCase().includes(query)) ||
                             (item.description && item.description.toLowerCase().includes(query)) ||
                             (item.sku && item.sku.toLowerCase().includes(query));

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);

        return matchesQuery && matchesCategory && matchesBrand;
      });

      renderProducts(filtered);
    }

    // Initialize fetch
    loadGoogleSheetData();
  </script>
</body>
</html>
