---
layout: page
title: Your Brain Mesh
description: Automated subject-specific brain finite element mesh creation pipeline
img: assets/img/projects/recode-brain-mesh/cover.jpg
importance: 1
category: work
related_publications: false
---

<div class="project-page">

<!-- Overview and Publication -->
<div class="row mt-4 align-items-start">
  <div class="col-sm-4">
    <h3>Overview</h3>
  </div>

  <div class="col-sm-8">
    <p>
      A reproducible research software project for automated subject-specific finite element brain meshes creation from MRI brain scans. Developed with the funding support from Imperial College London's ReCoDE programme, the project translates a complex image-to-mesh workflow into a clearer notebook-based pipeline with supporting documentation. 
    </p>
  </div>
</div>

<!-- 
<div class="row mt-4 align-items-start">
  <div class="col-sm-4">
    <h3>Publication</h3>
  </div>

  <div class="col-sm-8">
    <p>
      Darvishi V, Chan EYK, <em>et al</em>, An automated, open-source pipeline for subject-specific finite element brain modelling. 
    </p>
  </div>
</div> 
-->


<!-- Project resources -->
<div class="row mt-5">
  <div class="col-md-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">GitHub repository</h4>
        <p class="card-text">
          The open-source repository contains the notebook-based workflow, helper scripts, example structure, and setup notes for creating subject-specific finite element brain meshes.
        </p>
        <a
          href="https://github.com/ImperialCollegeLondon/ReCoDE-brain-mesh-creation"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm project-theme-btn"
        >
          View GitHub repository →
        </a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">Documentation site</h4>
        <p class="card-text">
          The GitHub Pages documentation explains the pipeline stages, expected folder structure, input and output files, and visualisation steps for checking generated meshes.
        </p>
        <a
          href="https://imperialcollegelondon.github.io/ReCoDE-brain-mesh-creation/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm project-theme-btn"
        >
          View documentation →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Image block 1 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>From MRI to mesh</h4>
    <p>
      The pipeline starts from subject-level neuroimaging data and anatomical segmentations. You can create your own brain FE mesh if you have your brain scan! 
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/recode-brain-mesh/mri-to-mesh.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>


<!-- Image block 2 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Anatomically detailed model</h4>
    <p>
      The resulting models contain approximately one million hexahedral elements, allowing cortical folding and internal anatomical compartments to be represented in three dimensions. 
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/recode-brain-mesh/anatomically-detailed.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>
<!-- 
    <h4>Automated meningeal reconstruction</h4>
      Thin meningeal structures are often omitted or manually created in MRI-based head models. This pipeline algorithmically reconstructs the falx, tentorium, pia mater and dura mater, allowing subject-specific meshes to include important intracranial membranes without manual modelling.
-->

<!-- Image block 3 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Hybrid MRI segmentation</h4>
    <p>
      Combines FreeSurfer parcellation with FSL FAST and BET to generate a complete whole-head segmentation from T1-weighted MRI. This hybrid strategy preserves detailed brain anatomy while filling compartments such as CSF, skull and skin.
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/recode-brain-mesh/aseg.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<!-- Image block 4 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Quality-controlled mesh refinement</h4>
    <p>
      Direct voxel-to-element conversion preserves anatomical detail but creates stair-step boundaries. The pipeline applies Laplacian smoothing with quality-controlled node locking, followed by contact repair to preserve a continuous CSF layer between brain and skull before simulation.
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/recode-brain-mesh/raw-and-smooth-mesh.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>


<!-- Final line -->
<div class="row justify-content-sm-center text-center mt-5 mb-2">
  <div class="col-sm-8">
    <p class="lead">
      <strong>Reproducible modelling starts before the simulation.</strong>
    </p>
  </div>
</div>

</div>