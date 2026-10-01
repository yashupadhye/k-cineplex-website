/* ===== EDIT MOVIES HERE (see README) ===== */
const PHONE = "919011961195";
const NOW = [
  {t:"Haiwaan", img:"haiwaan", w:320, h:480},
  {t:"Mirzapur: The Movie", img:"mirzapur", w:384, h:480},
  {t:"Jayanti 2", img:"jayanti-2", w:384, h:480},
  {t:"Resident Evil", img:"resident-evil", w:324, h:480},
  {t:"Hanuman Ansh", img:"hanuman-ansh", w:320, h:480}
];
const SOON = [
  {t:"Drishyam 3", d:"2 Oct 2026", img:"drishyam-3", w:270, h:480, p:"Ajay Devgn returns as Vijay Salgaonkar."},
  {t:"Vvaan: Force of the Forrest", d:"Sept 2026", img:"vvaan", w:384, h:480, p:"Folklore meets modern reality in this supernatural thriller."},
  {t:"Ramayana: Part 1", d:"Diwali", img:"ramayana", w:382, h:480, p:"Nitesh Tiwari's epic with Ranbir Kapoor and Sai Pallavi."}
];
/* ========================================= */
const wa = m => `https://wa.me/${PHONE}?text=${encodeURIComponent(m)}`;
const esc = s => s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.getElementById("nowList").innerHTML = NOW.map(m =>
  `<li><a href="${wa("Hi, showtimes for " + m.t)}" target="_blank" rel="noopener"><img src="img/${m.img}.webp" width="${m.w}" height="${m.h}" loading="lazy" alt="${esc(m.t)} poster"><span>${esc(m.t)}</span><small>Ask for showtimes</small></a></li>`).join("");

document.getElementById("soonList").innerHTML = SOON.map(m =>
  `<li><img src="img/${m.img}.webp" width="${m.w}" height="${m.h}" loading="lazy" alt="${esc(m.t)} poster"><div><time>${esc(m.d)}</time><h3>${esc(m.t)}</h3><p>${esc(m.p)}</p></div></li>`).join("");

document.getElementById("yr").textContent = new Date().getFullYear();

const mb = document.getElementById("loadMap");
mb.onclick = () => {
  const f = document.createElement("iframe");
  f.src = "https://www.google.com/maps?q=K%20Cineplex%20Kopargaon&output=embed";
  f.title = "K Cineplex on Google Maps";
  mb.replaceWith(f);
};

/* mobile menu: close on link tap or tap outside */
const menu = document.querySelector(".menu");
menu.addEventListener("click", e => { if (e.target.closest("a")) menu.open = false; });
document.addEventListener("click", e => { if (menu.open && !menu.contains(e.target)) menu.open = false; });

/* photo viewer */
const lb = document.getElementById("lb"), lbi = lb.querySelector("img");
document.getElementById("shots").addEventListener("click", e => {
  const i = e.target.closest("img"); if (!i) return;
  lbi.src = i.src; lbi.alt = i.alt; lb.showModal();
});
lb.addEventListener("click", () => lb.close());
