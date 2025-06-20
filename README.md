# portfolio-site


## Installation / Setup

To get a local copy of this portfolio website up and running on your machine, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js**: [Download and Install Node.js](https://nodejs.org/en/download/) (Includes npm - Node Package Manager)
* **npm** (Node Package Manager) or **Yarn**:
    * npm comes with Node.js.
    * To install Yarn: `npm install -g yarn`

### Steps to Run Locally

1.  **Clone the repository:**
    Open your terminal or command prompt and run:
    ```bash
    git clone [https://github.com/sumitrac/portfolio-site.git](https://github.com/sumitrac/portfolio-site.git)
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd portfolio-site
    ```

3.  **Install project dependencies:**
    This command will read your `package.json` file and download all the necessary libraries and packages.
    ```bash
    npm install
    # OR if you prefer Yarn:
    # yarn install
    ```

4.  **Start the development server:**
    This will compile your Vite project and serve it locally.
    ```bash
    npm run dev
    # OR if you prefer Yarn:
    # yarn dev
    ```
    The site should automatically open in your web browser, typically at `http://localhost:5173/` (or a similar port). You'll see any changes you make reflected live.

5.  ** (Optional) Build for production:**
    If you want to create an optimized, production-ready build of the site:
    ```bash
    npm run build
    # OR if you prefer Yarn:
    # yarn build
    ```
    This will create a `dist` folder in your project directory containing the static files ready for deployment.

6.  **(Optional) Preview the production build locally:**
    After running `npm run build`, you can preview the production version of your site locally:
    ```bash
    npm run preview
    # OR if you prefer Yarn:
    # yarn preview
    ```
    This usually serves the `dist` folder at a different local port (e.g., `http://localhost:4173/`).