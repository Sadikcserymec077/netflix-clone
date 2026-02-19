# Netflix Clone (Netfix)

This project is a Netflix Clone frontend built with React (Vite).

## Setup Instructions

1.  **Clone the Repository**: If you haven't already.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure API Key**:
    -   Go to `src/services/requests.js`.
    -   Replace `YOUR_API_KEY_HERE` with your TMDB API Key.
    -   Example: `const API_KEY = "1234567890abcdef1234567890abcdef";`

4.  **Run the App**:
    ```bash
    npm run dev
    ```

## Features

-   **Netflix Homepage**: Hero banner with trending movie/show.
-   **Categories**: Rows for Trending, Top Rated, Action, Comedy, Horror, Romance, Documentaries.
-   **Responsive Design**: Mobile-friendly layout.
-   **Smooth Scrolling**: Horizontal scrolling for movie rows.
