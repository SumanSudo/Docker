// ===================================================================
// Docker Basics - Simple Express.js Application
// ===================================================================
// This demonstrates how applications run inside Docker containers.
// Key concepts: PORT mapping, Environment Variables, and Container Isolation
// ===================================================================

const express = require("express");
const app = express();

// 🌱 ENVIRONMENT VARIABLES
// Environment variables are used to configure the app without hardcoding values.
// In the README: docker run -e PORT=5000 sends this to the container
// Usage: docker run -e NODE_ENV=development -e PORT=3000 node-app
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || "development";

console.log(`🚀 Starting Node.js Server`);
console.log(`📍 Environment: ${NODE_ENV}`);
console.log(`🔌 Configured Port: ${PORT}`);

// 🌐 ROUTES
// Simple API endpoint to verify the container is working
app.get("/", (req, res) => {
  return res.json({
    message: "🐳 Hey, I am in Docker!",
    environment: NODE_ENV,
    port: PORT,
    description: "This app runs inside an isolated Docker container",
  });
});

// Health check endpoint (useful for orchestration)
app.get("/health", (req, res) => {
  return res.json({
    status: "✅ Healthy",
    uptime: process.uptime(),
  });
});

// 🔌 PORT MAPPING
// In the README: docker run -p 8080:3000 node-app
// This means:
//   - Container port 8000 (internal) ← this PORT
//   - Host port 8080 (your PC) ← mapped in docker-compose.yml
// Access at: http://localhost:8080
app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n✅ Server is running on port: ${PORT}`);
  console.log(`🌍 Access at: http://localhost:8080`);
  console.log(
    `\n📌 Note: Inside container = port ${PORT}, From your PC = port 8080\n`,
  );
});
