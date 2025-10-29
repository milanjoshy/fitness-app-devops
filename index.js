const express = require('express');
const app = express();
const PORT = 3000;

// This template literal contains your entire static webpage.
const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Fitness Hub</title>
    <!-- We use Tailwind CSS for rapid, modern styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* A simple style for the hero image */
        #home {
            background-image: url('https://placehold.co/1920x1080/334155/e2e8f0?text=Welcome+to+Your+Fitness+Journey');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>
<body class="bg-slate-100 font-sans">

    <!-- Header & Navigation -->
    <header class="bg-white shadow-md fixed w-full z-10">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" class="text-2xl font-bold text-slate-800">FitnessHub</a>
            <ul class="flex space-x-6">
                <li><a href="#home" class="text-gray-600 hover:text-blue-500 transition duration-300">Home</a></li>
                <li><a href="#workouts" class="text-gray-600 hover:text-blue-500 transition duration-300">Workouts</a></li>
                <li><a href="#diet" class="text-gray-600 hover:text-blue-500 transition duration-300">Diet Plans</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Area -->
    <main>
        <!-- Home/Hero Section -->
        <section id="home" class="h-screen flex items-center justify-center text-center text-white pt-16">
            <div class="bg-black bg-opacity-50 p-10 rounded-lg">
                <h1 class="text-5xl font-extrabold mb-4">Your Journey to a Healthier Lifestyle</h1>
                <p class="text-xl">Automated, Deployed, and Ready to Help You Succeed.</p>
            </div>
        </section>

        <!-- Workouts Section -->
        <section id="workouts" class="py-20 pt-24">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center text-slate-800 mb-12">Workout Plans</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Workout Card 1 -->
                    <div class="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/600x400/60a5fa/white?text=Cardio+Blast" alt="Cardio Workout" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-2xl font-bold text-slate-700 mb-2">Cardio Blast</h3>
                            <p class="text-gray-600">30-minute high-intensity interval training (HIIT) to boost your metabolism and burn fat.</p>
                        </div>
                    </div>
                    <!-- Workout Card 2 -->
                    <div class="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/600x400/fbbf24/white?text=Full-Body+Strength" alt="Strength Training" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-2xl font-bold text-slate-700 mb-2">Full-Body Strength</h3>
                            <p class="text-gray-600">A comprehensive workout hitting all major muscle groups. Ideal for building lean muscle.</p>
                        </div>
                    </div>
                    <!-- Workout Card 3 -->
                    <div class="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/600x400/a3e635/white?text=Yoga+&amp;+Flexibility" alt="Yoga" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-2xl font-bold text-slate-700 mb-2">Yoga & Flexibility</h3>
                            <p class="text-gray-600">Improve your mobility, reduce stress, and connect with your body through guided yoga flows.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Diet Plans Section -->
        <section id="diet" class="py-20 bg-slate-200">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center text-slate-800 mb-12">Diet Plans</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Diet Card 1 -->
                    <div class="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <img src="https://placehold.co/400x400/f87171/white?text=High+Protein" alt="High Protein Meal" class="w-full md:w-1/3 h-64 md:h-auto object-cover">
                        <div class="p-6 flex flex-col justify-center">
                            <h3 class="text-2xl font-bold text-slate-700 mb-2">The High-Protein Plan</h3>
                            <p class="text-gray-600">Focuses on lean meats, dairy, and legumes to support muscle growth and repair.</p>
                        </div>
                    </div>
                    <!-- Diet Card 2 -->
                    <div class="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <img src="https://placehold.co/400x400/4ade80/white?text=Low+Carb" alt="Low Carb Meal" class="w-full md:w-1/3 h-64 md:h-auto object-cover">
                        <div class="p-6 flex flex-col justify-center">
                            <h3 class="text-2xl font-bold text-slate-700 mb-2">The Low-Carb Plan</h3>
                            <p class="text-gray-600">Emphasizes healthy fats and vegetables to help you manage weight and energy levels.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800 text-white py-10">
        <div class="container mx-auto px-6 text-center">
            <p>&copy; 2025 FitnessHub. All rights reserved.</p>
            <p class="text-sm text-slate-400">Deployed with a full DevOps CI/CD Pipeline.</p>
        </div>
    </footer>

    <!-- Simple script for smooth scrolling -->
    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
`;

// All routes now send the same HTML file.
// The navigation links (#home, #workouts, #diet) handle showing the right section.
app.get('/', (req, res) => {
  res.send(htmlContent);
});

app.get('/workouts', (req, res) => {
  res.send(htmlContent);
});

app.get('/diet', (req, res) => {
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Fitness app server running on http://localhost:${PORT}`);
});
