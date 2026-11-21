---
layout: page
title: ViPlan
permalink: /projects/viplan/
description: From camera images and a natural-language instruction to symbolic plans for robot execution.
importance: 2
context: ICRA 2025 · Physical robot and simulation
demo_poster: /assets/img/publication_preview/viplan-demo.jpg
demo_url: https://www.youtube.com/watch?v=Wpkj2IS63wQ
---

**Role:** Co-first author on the ICRA 2025 paper.

## System integration

ViPlan takes a camera image and a natural-language instruction and uses a vision-language model to generate a Planning Domain Definition Language (PDDL) problem file. The file describes the objects, initial state, and goal. A classical planner combines it with a supplied domain model to compute an action sequence.

The system checks the generated object list against visual detections and uses depth data to estimate object poses. A behavior tree coordinates generation, planning, and execution, with feedback to retry when a stage fails. The public implementation includes visual grounding, 3D localization, PDDL generation, and ROS 2 integration.

## Evaluation

The team evaluated the system in simulation and on a physical Franka Emika Panda arm. The study examined object identification, initial-state and goal accuracy, and whether generated problem files yielded valid plans. The lab video shows the robot setup and task execution.

[Watch the real-robot demo](https://www.youtube.com/watch?v=Wpkj2IS63wQ) · [Watch the lab overview](https://www.youtube.com/watch?v=l0LjTYrkhjo) · [View the implementation](https://github.com/arebs23/ViPlan--Here-s-your-PDDL-Problem-File-On-Using-VLMs-for-Generating-Symbolic-PDDL-Problem-Files/tree/main) · [Read the ICRA paper](https://doi.org/10.1109/ICRA55743.2025.11127832)

[ICRA 2025 publication record](https://portal.fis.tum.de/en/publications/heres-your-pddl-problem-file-on-using-vlms-for-generating-symboli/)
