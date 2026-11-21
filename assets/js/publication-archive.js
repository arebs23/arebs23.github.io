const archive = document.querySelector(".publication-archive");
const search = archive.querySelector("#publication-search");
const year = archive.querySelector("#publication-year");
const count = archive.querySelector(".publication-count");
const entries = Array.from(archive.querySelectorAll("[data-publication-year]"), (article) => ({
  item: article.closest("li"),
  year: article.dataset.publicationYear,
  text: article.querySelector(".publication-details").textContent.toLowerCase().replace(/\s+/g, " "),
}));

const years = [...new Set(entries.map((entry) => entry.year))].sort((a, b) => Number(b) - Number(a));
years.forEach((value) => year.add(new Option(value, value)));

function filterPublications() {
  const terms = search.value.trim().toLowerCase().split(/\s+/);
  let visible = 0;
  for (const entry of entries) {
    const matches = (!year.value || entry.year === year.value) && terms.every((term) => entry.text.includes(term));
    entry.item.hidden = !matches;
    if (matches) visible += 1;
  }
  count.textContent = `Showing ${visible} of ${entries.length} publications`;
}

search.addEventListener("input", filterPublications);
year.addEventListener("change", filterPublications);
archive.querySelector(".publication-filters").hidden = false;
filterPublications();
