const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const previews = new Map();

document.querySelectorAll(".portfolio-demo video").forEach((video) => {
  previews.set(video, (visible) => {
    if (visible) video.play().catch(() => {});
    else video.pause();
  });
});

const observer = new IntersectionObserver(
  (changes) => {
    for (const { target, intersectionRatio } of changes) {
      if (!reducedMotion.matches) previews.get(target)(intersectionRatio >= 0.5);
    }
  },
  { threshold: 0.5 },
);

function updatePreviewPreference() {
  observer.disconnect();
  for (const [element, playback] of previews) {
    if (reducedMotion.matches) playback(false);
    else observer.observe(element);
  }
}

reducedMotion.addEventListener("change", updatePreviewPreference);
updatePreviewPreference();
