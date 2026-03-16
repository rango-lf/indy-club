// header.js
window.INDY_HEADER = `
  <div class="titlebar">
    <div class="titlebar-left">
      <div class="logo-mark">💡</div>
      <span class="site-name">INDY<span>CLUB</span></span>
    </div>
    <div class="titlebar-right">
      <div class="win-controls">
        <div class="wc r"></div>
        <div class="wc y"></div>
        <div class="wc g"></div>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Nav dropdown -->
    <nav class="nav-menu" id="nav-menu">
      <div class="nav-section-label">Navigate</div>
      <a class="nav-link" href="https://indy-club.vercel.app/"><span class="nav-arrow">›</span> Home</a>

      <div class="nav-divider"></div>
      <div class="nav-section-label">About</div>
      <a class="nav-link" href="/pages/about.html"><span class="nav-arrow">›</span> About Us</a>
      <a class="nav-link" href="/pages/team.html"><span class="nav-arrow">›</span> Meet the Team</a>
      <a class="nav-link" href="/pages/contact.html"><span class="nav-arrow">›</span> Contact</a>

      <div class="nav-divider"></div>
      <div class="nav-section-label">Resources</div>
      <a class="nav-link" href="/pages/resources.html"><span class="nav-arrow">›</span> Academic Resources</a>
      <a class="nav-link" href="/pages/resources.html"><span class="nav-arrow">›</span> Health &amp; Wellness</a>
      <a class="nav-link" href="/pages/resources.html"><span class="nav-arrow">›</span> Mentorship</a>
      <a class="nav-link" href="/pages/resources.html"><span class="nav-arrow">›</span> Lockers</a>

      <div class="nav-divider"></div>
      <div class="nav-section-label">More</div>
      <a class="nav-link" href="/pages/events.html"><span class="nav-arrow">›</span> Events</a>
      <a class="nav-link" href="/pages/merch.html"><span class="nav-arrow">›</span> Merch</a>
    </nav>
  </div>

  <!-- Tab bar -->
  <div class="tabbar">
    <div class="current-tab">
      <div class="tab-pip"></div>
      <span id="tab-label"></span>
    </div>
  </div>

  <!-- Address bar -->
  <div class="addressbar">
    <button class="addr-btn" id="btn-back">←</button>
    <button class="addr-btn" id="btn-forward">→</button>
    <input class="addr-input" id="addr" readonly/>
  </div>
`;
