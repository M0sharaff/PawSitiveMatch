# PawsitiveMatch

## Find Your Perfect Companion, Beautifully.

PawsitiveMatch is a cutting-edge web application prototype designed to connect loving individuals with their perfect pet companions. It goes beyond a simple listing service by integrating advanced UI/UX patterns, fluid animations, and generative AI to create an engaging, intuitive, and joyful adoption experience.

This project serves as a showcase for modern frontend development, demonstrating a mastery of React, Next.js, and complex, interactive user interfaces.

## ✨ Features

-   **Interactive Pet Browsing:** A rich, filterable grid of available pets.
-   **Advanced 3D Pet Cards:** Cards with 3D tilt, layered parallax backgrounds, and mood-based ambient lighting that respond to user interaction.
-   **AI-Powered Recommendations:** A smart form that takes user lifestyle preferences and uses AI to suggest perfectly matched pets.
-   **Generative AI Content:**
    -   **AI Pet Bio Generation:** Create unique, first-person biographies for pets on the fly.
    -   **AI Image Generation:** Generate entirely new, photo-realistic images of pets.
    -   **AI Vet Assistant:** An interactive Q&A assistant on each pet's profile to answer potential adopter questions.
-   **"Tinder for Pets" Swipe Page:** A fun, mobile-friendly interface (`/swipe`) where users can swipe right to save pets and left to pass.
-   **"Instagram-Style" Pet Stories:** An immersive, full-screen story viewer (`/stories`) that auto-plays through pet profiles.
-   **Dynamic Theme Engine:** A fully customizable theme switcher with Light/Dark modes and multiple color palettes (Default, Forest, Sky, Night) that persists to `localStorage`.
-   **Fluid Page Transitions:** Seamless, animated transitions between all pages for a native app-like feel, powered by Framer Motion.
-   **User Profiles:** A client-side profile page to view and manage saved pets, using `localStorage` for persistence.
-   **Responsive Design:** A beautiful and functional experience across desktop, tablet, and mobile devices.

## 🚀 Technologies Used

-   **Framework:** **Next.js 15** (with App Router)
-   **Language:** **TypeScript**
-   **UI Library:** **React 18**
-   **Styling:** **Tailwind CSS**
-   **Component Library:** **Shadcn UI** (a collection of accessible and reusable components)
-   **Animations & Gestures:**
    -   **Framer Motion** (for page transitions, layout animations, and complex UI effects)
    -   **@use-gesture/react** (for handling drag/swipe gestures)
-   **AI Integration:**
    -   **Genkit** (Google's framework for building with generative AI)
    -   **Gemini Models** (for text and image generation)
-   **Forms:** **React Hook Form** with **Zod** for robust validation.
-   **Icons:** **Lucide React**

## 🛠️ Getting Started

Follow these instructions to set up and run the project locally.

**Prerequisites:**

-   Node.js (v18 or higher recommended)
-   `npm` or `yarn`
-   Git

**Installation:**

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd PawsitiveMatch
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project. You will need to add your Google AI API key for the Genkit features to work.
    ```
    GOOGLE_API_KEY=your_google_ai_api_key_here
    ```

4.  **Run the development server:**
    The app runs on two concurrent processes: the Next.js frontend and the Genkit AI server.

    -   **In your first terminal, run the Next.js app:**
        ```bash
        npm run dev
        ```
        This will start the frontend on `http://localhost:9002`.

    -   **In your second terminal, run the Genkit development server:**
        ```bash
        npm run genkit:watch
        ```
        This starts the Genkit toolkit in watch mode, which will handle the AI flow executions.

5.  **Open the app:**
    Navigate to [http://localhost:9002](http://localhost:9002) in your browser to see the application in action.
