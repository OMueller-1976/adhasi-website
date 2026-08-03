import { NextResponse } from 'next/server'

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ADHaSi Shop | Merch für Kinder mit ADHS & ihre Begleiter</title>
  <meta name="description" content="T-Shirts & Hoodies für Kinder mit ADHS, Eltern, Ergotherapeuten und Sonderpädagogen." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Fredoka:wght@600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Nunito', sans-serif; background: #fff; color: #171717; }

    /* HEADER – exakt wie adhasi.de */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: #fff;
      border-bottom: 1px solid #E5E7EB;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    .logo {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #29B5C3;
      text-decoration: none;
    }
    .nav { display: flex; align-items: center; gap: 1.5rem; }
    .nav a {
      font-size: 0.88rem;
      font-weight: 600;
      color: #374151;
      text-decoration: none;
      transition: color 0.15s;
    }
    .nav a:hover { color: #29B5C3; }
    .nav a.active { color: #29B5C3; }
    .btn-paed {
      border: 1.5px solid #E5E7EB;
      border-radius: 999px;
      padding: 0.35rem 1rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: #374151;
      text-decoration: none;
      transition: border-color 0.15s;
    }
    .btn-paed:hover { border-color: #29B5C3; color: #29B5C3; }
    .btn-login {
      background: #3BB871;
      color: #fff !important;
      border-radius: 999px;
      padding: 0.4rem 1.1rem;
      font-size: 0.82rem;
      font-weight: 700;
      text-decoration: none;
      transition: background 0.15s;
    }
    .btn-login:hover { background: #2DA362; }

    /* HERO */
    .hero {
      background: #29B5C3;
      padding: 4rem 1.5rem;
      text-align: center;
    }
    .hero h1 {
      font-family: 'Fredoka', sans-serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.75rem;
    }
    .hero p {
      font-size: 1rem;
      color: rgba(255,255,255,0.9);
      max-width: 560px;
      margin: 0 auto;
      line-height: 1.65;
    }

    /* SHOP */
    .shop-wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem 3rem;
    }

    /* FOOTER */
    .site-footer {
      border-top: 1px solid #E5E7EB;
      padding: 1.5rem;
      text-align: center;
      font-size: 0.78rem;
      color: #6B7280;
    }
    .site-footer a { color: #29B5C3; text-decoration: none; }
  </style>
</head>
<body>

  <header class="site-header">
    <div class="header-inner">
      <a href="https://www.adhasi.de" class="logo">ADHaSi</a>
      <nav class="nav">
        <a href="https://www.adhasi.de/app">ADHaSi App</a>
        <a href="https://www.adhasi.de/adhs-grundlagen">ADHS Wissen</a>
        <a href="https://www.adhasi.de/ratgeber">Ratgeber</a>
        <a href="https://www.adhasi.de/adhs-uebungen">Achtsamkeit</a>
        <a href="/shop" class="active">Shop</a>
        <a href="https://www.adhasi.de/paedagogen/login" class="btn-paed">Für Pädagog:innen</a>
        <a href="https://www.adhasi.de/eltern/login" class="btn-login">Eltern-Login</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <h1>Stark. Mutig. Anders.</h1>
    <p>Shirts & Hoodies für Kinder mit ADHS, ihre Familien und alle, die wissen: Anders denken ist eine Superkraft.</p>
  </section>

  <div class="shop-wrap">
    <div id="myShop">
      <a href="https://lrs-adhs-merch.myspreadshop.de">lrs-adhs-merch</a>
    </div>
  </div>

  <footer class="site-footer">
    <p>Bestellung & Zahlung sicher über Spreadshirt · Versand 3–5 Werktage · 30 Tage Rückgabe</p>
    <p style="margin-top:0.4rem;">
      <a href="https://www.adhasi.de/impressum">Impressum</a> ·
      <a href="https://www.adhasi.de/datenschutz">Datenschutz</a>
    </p>
  </footer>

  <script>
    var spread_shop_config = {
      shopName: 'lrs-adhs-merch',
      locale: 'de_DE',
      prefix: 'https://lrs-adhs-merch.myspreadshop.de',
      baseId: 'myShop'
    };
  </script>
  <script type="text/javascript"
    src="https://lrs-adhs-merch.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js">
  </script>

</body>
</html>`

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
