import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow text-center p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚀 Welcome to My Website
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is a simple demo website built with <b>React + Vite + TailwindCSS</b>. 
          The navbar has active link highlighting, hover transitions, and a responsive design. 
          Scroll down to see the footer.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-pink-300 text-center p-4 text-gray-800 font-medium">
        © {new Date().getFullYear()} My Website | Designed with ❤️ using React + Tailwind
      </footer>
    </div>
  );
}

export default App;
