---
layout: page
title: MEMENTO
permalink: /projects/memento/
description: Evolving executable policies in simulation and transferring a Tower of Hanoi policy to a physical Franka Panda.
importance: 1
context: arXiv 2026 · Sim-to-real manipulation
demo_video: /assets/video/memento-preview.mp4
demo_poster: /assets/video/memento-preview.jpg
demo_url: https://github.com/sygkounas/MEMENTO/blob/main/videos/Robot_Demo_6x_github_24MB.mp4
---

**Role:** Co-author of the MEMENTO preprint.

## Policy search

MEMENTO represents robot policies as executable programs. A rollout evaluator scores each candidate and provides structured feedback. The search uses that feedback and previous attempts to revise the strongest candidate and compare new variants by running them in simulation.

## Simulation and hardware

The team evaluated long-horizon manipulation in Robosuite and household tasks in AI2-THOR. The paper reports generalization to held-out object configurations and scenes. The team transferred the best evolved Robosuite policy to a physical Franka Panda for a Tower of Hanoi demonstration.

[Watch the Franka demonstration](https://github.com/sygkounas/MEMENTO/blob/main/videos/Robot_Demo_6x_github_24MB.mp4) · [Explore the project website](https://arebs23.github.io/MEMENTO/) · [View the source code](https://github.com/sygkounas/MEMENTO) · [Read the preprint](https://arxiv.org/abs/2607.22832)
