export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    
    const redirects = {
      '/': 'https://worldcupcentral.net',
      '/rumble': 'https://rumble.com/c/c-7834008',
      '/youtube': 'https://www.youtube.com/@theworldcupcentral',
    };
    
    if (redirects[pathname]) {
      return Response.redirect(redirects[pathname], 301);
    }
    
    // Custom 404 Page
    return new Response(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Link Not Found | World Cup Central</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #0066CC 0%, #00CC66 100%);
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .container {
      max-width: 600px;
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 50px 30px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }
    
    .logo {
      width: 120px;
      height: 120px;
      margin: 0 auto 30px;
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    h1 {
      font-size: 72px;
      font-weight: 700;
      margin-bottom: 20px;
      color: #FFD700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    p {
      font-size: 18px;
      margin-bottom: 35px;
      opacity: 0.95;
      line-height: 1.6;
    }
    
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
    }
    
    .btn {
      display: inline-block;
      padding: 15px 30px;
      background: #fff;
      color: #0066CC;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      background: #FFD700;
    }
    
    .btn-primary {
      background: #FFD700;
      color: #0066CC;
    }
    
    .btn-secondary {
      background: #fff;
      color: #0066CC;
    }
    
    .available-links {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
    }
    
    .available-links h3 {
      font-size: 20px;
      margin-bottom: 20px;
      opacity: 0.9;
    }
    
    @media (max-width: 600px) {
      h1 { font-size: 56px; }
      h2 { font-size: 24px; }
      p { font-size: 16px; }
      .btn { padding: 12px 24px; font-size: 14px; }
      .container { padding: 40px 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" fill="#0066CC" stroke="#fff" stroke-width="4"/>
      <path d="M100 20 L130 40 L130 80 L100 100 L70 80 L70 40 Z" fill="#00CC66" stroke="#fff" stroke-width="3"/>
      <path d="M40 100 L60 70 L100 70 L120 100 L100 130 L60 130 Z" fill="#00CC66" stroke="#fff" stroke-width="3"/>
      <text x="100" y="115" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-weight="700" font-size="32">WCC</text>
    </svg>
    
    <h1>404</h1>
    <h2>Offside! ⚽</h2>
    <p>This link doesn't exist. Looks like you've been sent to the wrong side of the pitch!</p>
    
    <div class="links">
      <a href="https://worldcupcentral.net" class="btn btn-primary">🏠 Go Home</a>
    </div>
    
    <div class="available-links">
      <h3>🔗 Available Quick Links:</h3>
      <div class="links">
        <a href="https://link.worldcupcentral.net/rumble" class="btn btn-secondary">📺 Rumble</a>
        <a href="https://link.worldcupcentral.net/youtube" class="btn btn-secondary">▶️ YouTube</a>
      </div>
    </div>
  </div>
</body>
</html>
    `, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}
