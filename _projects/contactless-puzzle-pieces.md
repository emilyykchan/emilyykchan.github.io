---
layout: page
title: Contactless Jigsaw Puzzle
description: Gesture-controlled assistive game for children with ASD
img: assets/img/projects/puzzlepieces/cover.jpg
importance: 2
category: work
related_publications: false
---

<!-- Overview and Outcome -->
<div class="project-page">

<div class="row mt-4 align-items-start">
  <div class="col-sm-4">
    <h3>Overview</h3>
  </div>

  <div class="col-sm-8">
    <p>
      A gesture-controlled tangram game developed for children with autism spectrum disorder (ASD) at La Cañada High School in Valencia, Spain. Built in Unity using <a href="https://www.ultraleap.com/tracking/" target="_blank" rel="noopener noreferrer">Leap Motion</a>, the project explored how contactless interaction could support structured learning, spatial reasoning, and motor coordination in a special educational environment.
    </p>
  </div>
</div>

<div class="row mt-4 align-items-start">
  <div class="col-sm-4">
    <h3>Outcome</h3>
  </div>

  <div class="col-sm-8">
    <p>
      The final system was deployed on both Windows and Android platforms and tested with children and teachers at La Cañada. Beyond gameplay itself, the project became an exploration of accessibility-focused interaction design — balancing technical precision, usability, and cognitive accessibility within a real classroom setting.
    </p>
  </div>
</div>

<!-- Youtube Video -->
<div class="row mt-5">
  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/l9QReH6kJFg"
        title="PuzzlePieces Game Demo"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <div class="col-sm-6 mt-3 mt-md-0">
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/eR_srhQJY4s"
        title="Classroom deployment  and user testing at La Cañada School"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>

<!-- Image block 1 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Contactless control</h4>
    <p>
      Designed during the Covid-19 pandemic, the game used <a href="https://www.ultraleap.com/tracking/" target="_blank" rel="noopener noreferrer">Leap Motion</a> to let children play without touching a screen, mouse, or shared device. The child moves puzzle pieces through hand gestures, making the interaction both more hygienic and more physically engaging.
    </p>
  </div>

   <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid path="assets/img/projects/puzzlepieces/gesture.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<!-- Image block 2 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Software design</h4>
    <p>
      The application was structured as a layered Unity system, separating interface control, game logic, Leap Motion input, validation, persistent records, and teacher-facing analysis. This made the project easier to test, extend, and deploy across both Windows and Android versions.
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/puzzlepieces/system-layered-architecture.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<!-- Image block 3 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Interaction flow</h4>
    <p>
      The application was designed around two user groups: children interacting with the game, and teachers monitoring progression and performance. The system supported multiple interaction methods — gesture, touchscreen, and mouse input — while maintaining a consistent gameplay structure across platforms.
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/puzzlepieces/game-logic.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<!-- Image block 4 -->
<div class="row align-items-center mt-5">
  <div class="col-sm-4">
    <h4>Playful UI</h4>
    <p>
      The interface was built around clear visual guidance: selecting difficulty, solving puzzles, receiving immediate feedback, and progressing through levels. The game included both copy and memory modes, allowing the same puzzle system to support visual matching, recall, and spatial reasoning.
    </p>
  </div>

  <div class="col-sm-7 offset-sm-1">
    {% include figure.liquid
      path="assets/img/projects/puzzlepieces/ui.jpg"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<!-- Final line and report link -->
<div class="row justify-content-sm-center text-center mt-5 mb-2">
  <div class="col-sm-8">
    <p class="lead">
      <strong>Accessibility starts with interaction.</strong>
    </p>
  </div>
</div>

<div class="row justify-content-sm-center text-center mb-5">
  <div class="col-sm-8">
    <a href="/assets/pdf/report-puzzlepieces.pdf" target="_blank" rel="noopener noreferrer">
      See my full process →
    </a>
  </div>
</div>

<!-- Project resources GitHub Repo -->
<div class="row mt-4">
  <div class="col-md-6 mt-3 mt-md-0">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">Source code and documentation</h4>
        <p class="card-text">
          The Unity project source files, setup notes, screenshots, and platform-specific instructions are available on GitHub.
        </p>
        <a
          href="https://github.com/emilyykchan/PuzzlePieces"
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
        <h4 class="card-title">Playable builds</h4>
        <p class="card-text">
          Final Android and Windows builds are provided through GitHub Releases. The Android version uses touch input, and the Windows version supports Leap Motion interaction.
        </p>
        <a
          href="https://github.com/emilyykchan/PuzzlePieces/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm project-theme-btn"
        >
          Download builds →
        </a>
      </div>
    </div>
  </div>
</div>

</div>
