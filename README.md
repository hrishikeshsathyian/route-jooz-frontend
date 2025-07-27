<a id="readme-top"></a>
# routejooz-frontend 🍊  
This repo serves as the **frontend** for the [IJooz Route Optimisation Platform](https://github.com/hrishikeshsathyian/routejooz-api) Project.

> This project is part of a **polyrepo** system. The frontend is designed to interact seamlessly with the separately deployed backend, but can also be run independently for UI development and testing.

## Table of Contents
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#built-with">Built With</a></li>
    </ul>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation-and-running">Installation and Running</a></li>
    </ul>
  </li>
  <li><a href="#contact-and-links">Contact and Links</a></li>
  <li><a href="#acknowledgments">Acknowledgments</a></li>
</ol>

---

## About the Project

This frontend allows iJooz Route Planners to upload a CSV of vending machine locations and specify the number of available drivers. The app then renders the optimized refill routes visually on a **dynamic Leaflet map**. 

The UI provides quick route insight and verification without manual mapping effort.

These displayed routes allows iJooz to minimize cost incurred by reducing **total driving time** (hence petrol cost) and minimizing **total drivers used**.

### How It Works

The frontend is a **Next.js App Router** application powered by **Tailwind CSS** and **React**:

1. Users upload a CSV of postal codes, and select number of drivers.
2. The CSV file and parameters are POSTed to the backend API (see [routejooz-api](https://github.com/hrishikeshsathyian/routejooz-api) for full backend preprocessing + optimization logic).
3. The backend returns optimized routes — each as a sequence of postal codes per driver.
4. The `/route/results` page renders these as **multi-color Leaflet polylines** and **coordinate-marked pins**.

### Built With

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)  [![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://reactjs.org/)  [![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)  [![Leaflet](https://img.shields.io/badge/leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started 🧭

### Prerequisites

- Node.js (v18 or higher recommended)


### Installation and Running ⚙️

1. Clone the repo
   ```bash
   git clone https://github.com/hrishikeshsathyian/route-jooz-frontend.git
   cd route-jooz-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000/](http://localhost:3000/) to start using the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---


## Contact and Links

Hrishikesh Sathyian – [LinkedIn](https://www.linkedin.com/in/hrishikesh-sathyian/) – [Email](mailto:hrishikeshsathyian2002@gmail.com)

Backend Repository – [https://github.com/hrishikeshsathyian/routejooz-api](https://github.com/hrishikeshsathyian/routejooz-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Acknowledgments

This project was introduced to me and developed with contributions from [Lee Sutton](https://github.com/2403338leesutton)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
