# 3D Visualization

This repository contains the 3D Visualization presentation and accompanying code samples that were shown at the Esri Developer Summit 2023. The presentation is created with reveal-md, featuring interactive samples for which the source code can be found in this repository.

## Presentation

- Gianluca Miele, Esri R&D Center Zürich
- Tobias Mansfield-Williams, Esri R&D Center Zürich

## Local setup

After cloning the repo, we need to install all the dependencies:

```bash
npm install
git submodule update --init --recursive
```

To compile everything and serve the files:

```bash
npm start
```

Vite will then start up and prepare itself for serving the presentation at http://localhost:5174/.
