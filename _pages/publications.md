---
layout: page
permalink: /publications/
title: Publications
description: Conference papers and preprints on robotic task planning, manipulation, object affordances, and embodied AI.
nav: true
nav_order: 2
---

<div class="publication-archive">
  <div class="publication-filters" hidden>
    <div>
      <label for="publication-search">Search all publications</label>
      <input id="publication-search" type="search" class="form-control" placeholder="Title, author, or topic">
    </div>
    <div>
      <label for="publication-year">Filter by year</label>
      <select id="publication-year" class="form-control"><option value="">All years</option></select>
    </div>
  </div>
  <p class="publication-count" role="status"></p>
  {% bibliography --template publication_entry --group_by none %}
</div>

<script src="{{ '/assets/js/publication-archive.js' | relative_url | bust_file_cache }}" defer></script>
<script src="{{ '/assets/js/portfolio-previews.js' | relative_url | bust_file_cache }}" defer></script>
