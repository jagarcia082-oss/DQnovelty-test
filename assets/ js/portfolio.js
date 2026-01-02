const items = [
  // SCHOOL WORK
  {
    title: "School Library Casework Upgrade",
    subtitle: "Custom built-ins + durable finishes",
    category: "school",
    tags: ["Casework", "Libraries", "High-traffic"],
    img: "assets/img/portfolio-school-1.jpg"
  },
  {
    title: "Classroom Storage & Teacher Station",
    subtitle: "Custom furniture installation",
    category: "school",
    tags: ["Furniture", "Classrooms", "Install"],
    img: "assets/img/portfolio-school-2.jpg"
  },

  // RESTORATION
  {
    title: "Water Damage Interior Restoration",
    subtitle: "Dry-out coordination + rebuild scope",
    category: "restoration",
    tags: ["Water", "Interior", "Closeout"],
    img: "assets/img/portfolio-restoration-1.jpg"
  },

  // REBUILD
  {
    title: "Rebuild: Interior Build-Back",
    subtitle: "Walls, finishes, flooring, and trim",
    category: "rebuild",
    tags: ["Build-back", "Finish carpentry", "Schedule"],
    img: "assets/img/portfolio-rebuild-1.jpg"
  },

  // RENOVATIONS
  {
    title: "Restroom Renovation (ADA Updates)",
    subtitle: "Tile, fixtures, partitions, accessories",
    category: "renovations",
    tags: ["Bathrooms", "ADA", "Tile"],
    img: "assets/img/portfolio-renovations-1.jpg"
  },
  {
    title: "Flooring Replacement (VCT/LVT)",
    subtitle: "High-traffic corridors + transitions",
    category: "renovations",
    tags: ["Flooring", "VCT/LVT", "Base"],
    img: "assets/img/portfolio-renovations-2.jpg"
  },
];

const grid = document.getElementById("portfolioGrid");
const buttons = document.querySelectorAll(".filterBtn");

function render(filter){
  grid.innerHTML = "";
  const filtered = (filter === "all") ? items : items.filter(i => i.category === filter);

  filtered.forEach(i => {
    const el = document.createElement("div");
    el.className = "galleryCard";
    el.innerHTML = `
      <img src="${i.img}" alt="${i.title}" onerror="this.style.display='none'">
      <div class="meta">
        <b>${i.title}</b>
        <small>${i.subtitle}</small>
        <div class="tagRow">
          <span class="tag">${i.category.toUpperCase()}</span>
          ${i.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

buttons.forEach(b => {
  b.addEventListener("click", () => {
    buttons.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    render(b.dataset.filter);

    // optional: update URL hash
    const f = b.dataset.filter;
    history.replaceState(null, "", f === "all" ? "portfolio.html" : `portfolio.html#${f}`);
  });
});

// Load from hash if present
const initial = (location.hash || "").replace("#","") || "all";
const initialBtn = [...buttons].find(b => b.dataset.filter === initial) || buttons[0];
initialBtn.click();

