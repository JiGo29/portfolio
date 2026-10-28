const $ = (s) => document.querySelector(s);
const chips = (t) => `<div class="chips">${t.map((x) => `<span>${x}</span>`).join("")}</div>`;

$("#projets-grid").innerHTML = PROJETS.map((p, i) => `
  <button class="card" data-i="${i}" aria-haspopup="dialog">
    <div class="prev"><div class="mock"><div class="dots"><i></i><i></i><i></i><span>${p.url}</span></div>
      <div class="b"><small>${p.label}</small><strong>${p.val}</strong><div class="bars"><i></i><i></i><i></i></div></div></div></div>
    <div class="info"><span class="cat">${p.cat}</span><h3>${p.nom}</h3><p>${p.desc}</p>${chips(p.tech)}
      <span class="more">Voir l’étude de cas <span>→</span></span></div>
  </button>`).join("");

$("#skills").innerHTML = Object.entries(COMPETENCES).map(([g, items]) => `
  <section><h3>${g}</h3>${items.map(([n, on]) =>
    `<div class="sk ${on ? "on" : ""}"><span>${n}</span><b>${on ? "Intermédiaire" : "Notions"}</b></div>`).join("")}</section>`).join("");

$("#veille-grid").innerHTML = VEILLE.map(([t, d, l, h], i) => `
  <a class="card link" href="${h}" target="_blank" rel="noopener"><span class="n">0${i + 1}</span>
    <h3>${t}</h3><p>${d}</p><span class="more"><span>${l}</span><span>→</span></span></a>`).join("");

$("#timeline").innerHTML = PARCOURS.map(([a, t, o, d, q]) => `
  <li><time>${a}</time><div><h3>${t}</h3><p class="org">${o}</p>${d ? `<p>${d}</p>` : ""}${q ? `<q>${q}</q>` : ""}</div></li>`).join("");

// Fenêtre « étude de cas »
const modal = $("#modal");
$("#projets-grid").addEventListener("click", (e) => {
  const c = e.target.closest(".card"); if (!c) return;
  const p = PROJETS[c.dataset.i];
  modal.innerHTML = `<span class="cat">${p.cat}</span><h3 id="m-titre">${p.nom}</h3>${chips(p.tech)}
    <h4>Démarche</h4><p>${p.demarche}</p><h4>Défis</h4><p>${p.defis}</p><h4>Résultats</h4><p>${p.resultats}</p>
    <div class="row"><a class="btn ghost mono" href="${p.code}" target="_blank" rel="noopener">Voir le code ↗</a>
    <button class="btn solid" onclick="modal.close()">Fermer</button></div>`;
  modal.showModal();
});
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

// Lien actif dans le menu
const links = [...document.querySelectorAll("nav a")];
const io = new IntersectionObserver((es) => es.forEach((en) => {
  if (en.isIntersecting) links.forEach((l) => l.toggleAttribute("aria-current", l.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));

// Formulaire : ouvre le client courriel (aucun serveur requis)
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Message de " + f.get("nom"))}&body=${encodeURIComponent(f.get("message") + "\n\n" + f.get("courriel"))}`;
});
