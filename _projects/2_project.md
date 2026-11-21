---
layout: page
title: Object affordance distillation
permalink: /projects/affordance-distillation/
description: Training a discriminative model to predict feasible interactions between objects using large language model supervision.
importance: 5
context: ICDL 2025 · Model evaluation
---

**Role:** First author on the ICDL 2025 paper.

## Learning pipeline

Can a smaller model predict whether one object can be placed on another? The team used a large language model as a teacher to generate feasibility labels and explanations for object pairs and actions. A discriminative student model learned from both signals, using the labels for classification and the explanations to capture the reasoning behind them.

## Evaluation

The experiments evaluated feasibility predictions across object pairs and actions. The paper reports improved computational efficiency while retaining the ability to generalize across those combinations.

[Read the ICDL paper](https://doi.org/10.1109/ICDL63968.2025.11204436)
