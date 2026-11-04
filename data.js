/* BIT BOLT bemutató – közös adattár a főoldal (index.html) és az admin (admin.html) között.
   Az adatok a látogató böngészőjében (localStorage) mentődnek, szerver nélkül.
   Más látogatók nem látják egymás módosításait; az „Alaphelyzet” gomb visszaállítja az eredetit. */
(function () {
  var KEY = 'bitbolt-demo-v1';

  var id = 1;
  function mk(name, cat, price, gar, o) {
    o = o || {};
    return { id: id++, name: name, cat: cat, price: price, gar: gar, spec: o.spec || '',
      featured: !!o.featured, sale: !!o.sale, visible: o.visible !== false, state: o.state || 'Új', img: '' };
  }

  function defaults() {
    id = 1;
    return {
      products: [
        mk('Asus Dual GeForce RTX 5060 Ti O8G', 'Videókártya', 269000, '3 év', { featured: 1, spec: 'PCIe · 8 GB' }),
        mk('480GB Kingspec SATA3 2,5" SSD', 'SSD', 32000, '2 év', { featured: 1, spec: 'SATA3 · 2,5"' }),
        mk('Asus RT-AX1800U WiFi 6 router', 'WiFi router', 24500, '2 év', { featured: 1, spec: 'Dual Band · 1 Gb LAN · 1×USB · 1×WAN · 3×LAN' }),
        mk('Asus RT-AX53U WiFi 6 router', 'WiFi router', 24800, '2 év', { featured: 1, spec: 'Dual Band · 1 Gb LAN · 1×WAN · 3×LAN' }),
        mk('Fujitsu Lifebook E782', 'Notebook', 49000, '12 hónap', { sale: 1, state: 'Felújított', spec: '15,6" · i7-3540M · 8 GB · 256 GB SSD · Win 10 Pro' }),
        mk('Fujitsu Lifebook U7410', 'Notebook', 90000, '12 hónap', { sale: 1, state: 'Felújított', spec: '14" FHD · i5-10310U · 8 GB · 256 GB SSD · Win 11 Pro' }),
        mk('Dell Latitude 5400', 'Notebook', 99000, '12 hónap', { sale: 1, state: 'Felújított', spec: '14" · i5-8265U · 16 GB · 256 GB SSD · Win 10 Pro' }),
        mk('HP ProBook 640 G8', 'Notebook', 105000, '12 hónap', { sale: 1, state: 'Felújított', spec: '14" FHD · i3-1115G4 · 8 GB · 256 GB SSD · Win 11 Pro' }),
        mk('Dell Latitude 5410', 'Notebook', 105000, '12 hónap', { sale: 1, state: 'Felújított', spec: '14" FHD · i5-10210U · 8 GB · 256 GB SSD · Win 11 Pro' }),
        mk('HP ProBook 455 G7', 'Notebook', 115000, '1 év', { sale: 1, state: 'Felújított', spec: '15,6" FHD · Ryzen 5 4560 · 8 GB · 256 GB SSD · Win 11 Pro' }),
        mk('Dell Latitude 5520', 'Notebook', 160000, '12 hónap', { sale: 1, state: 'Felújított', spec: '15,6" FHD érintő · i5-1135G7 · 16 GB · 512 GB SSD · Win 11 Pro' }),
        mk('Lenovo V15 G4 AMN', 'Notebook', 179900, '12 hónap', { sale: 1, spec: '15,6" FHD · Ryzen 3 7320U · 8 GB · 256 GB NVMe · Win 11 Pro' }),
        mk('Windows 10/11 Professional digitális licensz', 'Szoftver', 14000, '—', { sale: 1, spec: 'Bármely géphez, azonnal aktiválható' }),
        mk('Kingston DTXG2 128 GB USB 3.2', 'Pen Drive', 7600, '5 év'),
        mk('Kingston microSDXC 128 GB Cl10', 'Memóriakártya', 16500, '5 év'),
        mk('Gembird 2,5" külső HDD ház, USB 3.0', 'USB eszköz', 4000, '1 év'),
        mk('Meetion M371 USB gaming egér, világítós', 'Egér', 2500, '1 év'),
        mk('Mercusys MW300UH USB WiFi adapter 300M', 'WiFi vevő', 4800, '2 év'),
        mk('Gembird MUSG-07 RGB gaming egér', 'Egér', 3500, '1 év'),
        mk('Genius Scorpion K220 billentyűzet, magyar', 'Billentyűzet', 6000, '1 év'),
        mk('AMD Ryzen 7 5700G OEM TRAY', 'Processzor', 93000, '3 év'),
        mk('Intel Core i5-14400F BOX', 'Processzor', 72000, '3 év'),
        mk('Gigabyte B760M D3HP DDR5', 'Alaplap', 45000, '3 év'),
        mk('Kingston Fury Beast DDR4 8 GB 3200 MHz', 'Memória', 46800, '3 év'),
        mk('DDR3 4 GB 1600 MHz', 'Memória', 6900, '3 év', { visible: false })
      ],
      heroId: 1,
      heroLabel: 'Kiemelt ajánlat',
      groups: [
        { title: 'Alkatrészek', icon: 'cpu', items: ['Alaplap', 'Processzor', 'Memória', 'Videókártya', 'Tápegység', 'Ház', 'Hűtőventilátorok', 'Vezérlőkártyák', 'DVD író'] },
        { title: 'Adattárolás', icon: 'ssd', items: ['SSD', 'Winchester', 'Külső USB-s winchester', 'Pen Drive', 'Memóriakártya, kártyaolvasó', 'CD és DVD lemezek'] },
        { title: 'Perifériák', icon: 'mouse', items: ['Monitor', 'Billentyűzet', 'Egér, vezetékes', 'Egér, vezeték nélküli', 'Egérpad', 'Webkamera', 'Játékvezérlők', 'Hangszóró, fejhallgató'] },
        { title: 'Hálózat', icon: 'wifi', items: ['WiFi router', 'WiFi Access Point', 'WiFi Range Extender', 'WiFi vevő', 'Switch', 'Hálózati kártya, kábel'] },
        { title: 'Nyomtatás', icon: 'printer', items: ['Nyomtató, multifunkciós', 'Szkenner', 'Tintapatron HP', 'Tintapatron Canon', 'Tintapatron Epson', 'Toner HP', 'Toner Kyocera', 'Töltőkészlet'] },
        { title: 'Notebook & használt gép', icon: 'laptop', items: ['Notebookok, azonnal elvihetők', 'Használt notebook', 'Használt számítógép', 'Notebook táskák', 'Notebookhűtők', 'Notebook adapterek'] },
        { title: 'Kábelek & adapterek', icon: 'cable', items: ['HDMI', 'DisplayPort', 'USB', 'UTP', 'SATA', 'VGA', 'DVI', 'HDMI / VGA / DP adapterek'] },
        { title: 'Energia & egyéb', icon: 'db', items: ['Szünetmentes táp (UPS)', 'Power bank', 'Elemek, akkumulátorok', 'Szoftver', 'USB eszközök', 'Tisztító eszközök'] }
      ],
      shop: { addr: '9022 Győr, Móricz Zsigmond rakpart 22', tel: '96/316-538', fax: '96/335-318', email: 'info@bitbolt.hu',
        week: '9–18', sat: '9–13', msg: '', notice: true, sale: true },
      log: [],
      cart: [],
      orders: []
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var d = JSON.parse(raw); if (d && d.products) { var def = defaults(); for (var k in def) if (d[k] == null) d[k] = def[k]; delete d.list; return d; } }
    } catch (e) {}
    return defaults();
  }

  var api = {
    KEY: KEY,
    data: load(),
    save: function () {
      try { localStorage.setItem(KEY, JSON.stringify(api.data)); return true; }
      catch (e) { return false; } /* pl. túl nagy kép, vagy privát böngészés */
    },
    reset: function () {
      try { localStorage.removeItem(KEY); } catch (e) {}
      api.data = defaults();
    },
    reload: function () { api.data = load(); },
    nextId: function () { return api.data.products.reduce(function (m, p) { return Math.max(m, p.id); }, 0) + 1; },
    logAdd: function (txt) {
      api.data.log.unshift({ t: Date.now(), txt: txt });
      api.data.log = api.data.log.slice(0, 8);
    },
    /* ---- kosár ---- */
    product: function (pid) { return api.data.products.find(function (p) { return p.id === pid; }); },
    cartItems: function () {
      return api.data.cart.map(function (c) { var p = api.product(c.id); return p && p.visible ? { p: p, qty: c.qty } : null; }).filter(Boolean);
    },
    cartCount: function () { return api.cartItems().reduce(function (s, c) { return s + c.qty; }, 0); },
    cartTotal: function () { return api.cartItems().reduce(function (s, c) { return s + c.qty * c.p.price; }, 0); },
    cartAdd: function (pid) {
      var c = api.data.cart.find(function (x) { return x.id === pid; });
      if (c) c.qty = Math.min(99, c.qty + 1); else api.data.cart.push({ id: pid, qty: 1 });
    },
    cartSet: function (pid, qty) {
      api.data.cart = api.data.cart.map(function (x) { return x.id === pid ? { id: pid, qty: Math.max(0, Math.min(99, qty)) } : x; })
        .filter(function (x) { return x.qty > 0; });
    },
    placeOrder: function (info) {
      var items = api.cartItems().map(function (c) { return { id: c.p.id, name: c.p.name, price: c.p.price, qty: c.qty }; });
      var no = 'BB-' + (1001 + api.data.orders.length);
      var o = { no: no, t: Date.now(), items: items, total: api.cartTotal() + (info.ship === 'Házhozszállítás' ? api.SHIP_FEE : 0),
        info: info, status: 'Új' };
      api.data.orders.unshift(o);
      api.data.cart = [];
      api.logAdd('Új rendelés: ' + no + ' – ' + info.name);
      return o;
    },
    SHIP_FEE: 2490,
    STATUSES: ['Új', 'Feldolgozás alatt', 'Átvehető', 'Kiszállítva', 'Teljesítve', 'Lemondva'],
    ft: function (n) { return String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' Ft'; },
    esc: function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); },
    icons: {
      cart: 'M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2M10 21h.01M17 21h.01',
      wrench: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z',
      shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4',
      db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
      gpu: 'M2 7h20v10H2zM6 17v3M18 17v3M8 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0',
      ssd: 'M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 7h8M8 11h8M9 17h.01M15 17h.01',
      wifi: 'M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01',
      cpu: 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
      mouse: 'M12 3a6 6 0 0 1 6 6v6a6 6 0 0 1-12 0V9a6 6 0 0 1 6-6zM12 7v4',
      printer: 'M6 9V3h12v6M6 18H4v-7h16v7h-2M7 14h10v7H7z',
      laptop: 'M4 5h16v11H4zM2 19h20',
      cable: 'M7 3v5M17 3v5M5 8h4v4a2 2 0 0 1-4 0zM15 8h4v4a2 2 0 0 1-4 0zM7 14v3a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-3',
      key: 'M15 7a4 4 0 1 1-3.9 5H8v3H5v-3H3v-3h8.1A4 4 0 0 1 15 7z',
      ram: 'M3 7h18v9H3zM7 16v3M11 16v3M15 16v3M19 16v3M7 10v3M11 10v3M15 10v3',
      box: 'M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8'
    },
    catIcon: function (c) {
      return { 'Videókártya': 'gpu', 'SSD': 'ssd', 'WiFi router': 'wifi', 'WiFi vevő': 'wifi', 'Notebook': 'laptop', 'Szoftver': 'key',
        'Processzor': 'cpu', 'Alaplap': 'cpu', 'Memória': 'ram', 'Egér': 'mouse', 'Billentyűzet': 'mouse', 'Pen Drive': 'ssd',
        'Memóriakártya': 'ssd', 'Monitor': 'laptop', 'Nyomtató': 'printer' }[c] || 'box';
    },
    CATS: ['Videókártya', 'Processzor', 'Alaplap', 'Memória', 'SSD', 'Pen Drive', 'Memóriakártya', 'Notebook', 'Monitor', 'Billentyűzet',
      'Egér', 'WiFi router', 'WiFi vevő', 'USB eszköz', 'Nyomtató', 'Szoftver', 'Egyéb']
  };
  window.BB = api;
})();
