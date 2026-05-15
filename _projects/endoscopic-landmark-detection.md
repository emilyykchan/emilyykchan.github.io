---
layout: page
title: Endoscopic Landmark Detection
description: CNN-based endoscopic image analysis for autonomous GI robot navigation
img: assets/img/projects/endoscopic-landmark-detection/pylorus.png
importance: 3
category: work
related_publications: false
---

<div class="project-page" markdown="1">

During my undergraduate studies, I contributed to a medical robotics research project on automatic anatomical landmark detection in endoscopic images. The project aimed to support autonomous navigation of gastrointestinal robots by detecting the natural anatomical centre of the pylorus, the opening between the stomach and the duodenum.

<div class="project-note">
  This project was later published as: Su, B., Gong, Y., <strong>Chen, Y.</strong> <em>et al</em>. Detection of Healthy and Diseased Pylorus Natural Anatomical Center with Convolutional Neural Network Classification and Filters. <em> J. Med. Biol. Eng. </em> 42, 216–224 (2022). <a href="https://doi.org/10.1007/s40846-022-00696-6">doi.org/10.1007/s40846-022-00696-6</a>
</div>

---

### Project background

For a gastrointestinal robot to move autonomously from the stomach into the duodenum, it needs to recognise the pylorus and identify a safe passage point. The pyloric centre is an important target because it provides a natural anatomical reference for guiding robot movement while reducing potential soft-tissue injury.

However, endoscopic images are visually complex. The appearance of the pylorus can vary between healthy and diseased cases, and the target structure may change shape, contrast, and orientation. This project therefore explored whether computer vision methods could automatically detect the pylorus centre from endoscopic images.



### What we developed

The method combined convolutional neural network classification with classical image-processing filters, including Sobel and Laplace operators. The CNN component was used to classify image regions, while the filtering steps helped refine anatomical boundaries and estimate the pylorus centre.

The algorithm was evaluated across healthy and diseased pylorus images, including multiple anatomical appearances and pathological settings.

<div class="row mt-4">
  <div class="col-md-4 mb-3">
    <div class="project-card">
      <div class="metric">CNN</div>
      <div class="metric-label">Image classification for pylorus localisation</div>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="project-card">
      <div class="metric">Filters</div>
      <div class="metric-label">Sobel and Laplace operators for boundary refinement</div>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="project-card">
      <div class="metric">Real-time</div>
      <div class="metric-label">Designed for fast anatomical centre tracking</div>
    </div>
  </div>
</div>

---

### Main results

The published study reported an average pylorus-centre detection error of **22.33 pixels**, corresponding to a **2.33% relative error** against the 960-pixel diagonal length of the endoscopic image. The average processing time was **26.51 ms per image**, supporting the feasibility of real-time tracking.

<div class="row mt-4">
  <div class="col-md-4 mb-3">
    <div class="project-card">
      <div class="metric">22.33 px</div>
      <div class="metric-label">Average centre-detection error</div>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="project-card">
      <div class="metric">2.33%</div>
      <div class="metric-label">Relative error against image diagonal length</div>
    </div>
  </div>

  <div class="col-md-4 mb-3">
    <div class="project-card">
      <div class="metric">26.51 ms</div>
      <div class="metric-label">Average processing time per image</div>
    </div>
  </div>
</div>


</div>