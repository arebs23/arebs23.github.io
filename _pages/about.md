---
layout: default
title: Home
permalink: /
---

<section class="portfolio-intro" aria-labelledby="portfolio-name">
  <div>
    <p class="portfolio-meta">Robotics software · Robot learning · Embodied AI</p>
    <h1 id="portfolio-name">Victor Aregbede</h1>
    <p class="portfolio-lead">I work on how robots turn observations and instructions into plans they can execute.</p>
    <p>My work spans vision-language task planning, sim-to-real manipulation, and 3D object affordance learning. With my collaborators, I evaluated ViPlan on a Franka Panda and transferred an evolved Tower of Hanoi policy from simulation to a physical arm in MEMENTO.</p>
    <div class="portfolio-links">
      <a class="portfolio-button" href="{{ '/projects/' | relative_url }}">Explore projects</a>
      <a href="{{ '/publications/' | relative_url }}">Watch robot demos</a>
      <a href="{{ '/cv/' | relative_url }}">Experience</a>
      <a href="mailto:{{ site.data.socials.email }}">Email me</a>
    </div>
  </div>
  <img src="{{ '/assets/img/victor_profile.jpg' | relative_url }}" alt="Victor Aregbede" fetchpriority="high">
</section>

<section class="portfolio-section" aria-labelledby="selected-work">
  <h2 id="selected-work">Selected work</h2>
  {% include portfolio_projects.liquid show_previews=true %}
</section>

<section class="portfolio-section" aria-labelledby="portfolio-contact">
  <h2 id="portfolio-contact">Contact</h2>
  <div class="portfolio-links">
    <a href="mailto:{{ site.data.socials.email }}">Email</a>
    <a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a>
    <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}/">LinkedIn</a>
    <a href="{{ '/publications/' | relative_url }}">Publications</a>
    <a href="https://mpi.aass.oru.se/victor-aregbede/">Örebro University research profile</a>
  </div>
</section>

<script src="{{ '/assets/js/portfolio-previews.js' | relative_url | bust_file_cache }}" defer></script>
