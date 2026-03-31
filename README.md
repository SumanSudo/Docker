# 🐳 Docker Basics

This repository demonstrates fundamental Docker concepts with simple explanations and examples. It is intended for beginners who want to understand how Docker works in real-world development.

---

## 🚨 Problem Docker Solves

Before Docker, developers faced several issues:

- ❌ “It works on my machine” problem
- ❌ Dependency conflicts between projects
- ❌ Complex setup for new developers
- ❌ Differences between development and production environments
- ❌ Heavy and slow virtual machines

👉 Docker solves these by providing a consistent and portable environment.

---

## 🚀 What is Docker?

Docker is a tool that allows you to package your application along with all its dependencies into a **container**, so it runs the same everywhere.

👉 **Build once, run anywhere**

---

## 📦 Docker Image vs Container

### 🔹 Docker Image

- Blueprint or template
- Contains app code, dependencies, runtime
- Read-only

### 🔹 Docker Container

- Running instance of an image
- Can be started, stopped, modified
- Multiple containers can run from one image

👉 **Image = Recipe | Container = Running app**

---

## 🔌 Port Mapping

Containers run in isolation, so their ports are not accessible by default.

Port mapping connects:

- **Host (your PC)** ↔ **Container**

### Syntax:

```bash
docker run -p <host_port>:<container_port> <image>
```

### Example:

```bash
docker run -p 8080:3000 node-app
```

👉 Access app at: `http://localhost:8080`

---

## 🌱 Environment Variables

Environment variables are used to configure applications without hardcoding values.

### Example:

```bash
docker run -e NODE_ENV=development -e PORT=5000 node-app
```

### Using `.env` file:

```bash
docker run --env-file .env node-app
```

👉 Useful for:

- Database URLs
- API keys
- App configuration

---

## 📦 Docker Compose

Docker Compose is a tool that allows you to define and run multi-container applications using a single docker-compose.yml file.

Start multiple services with one command
Configure ports, environment variables, and dependencies
Simplifies running complex applications

Start all services:

```bash
docker-compose up
```

Stop all services:

```bash
docker-compose down
```

---

## 🌐 Docker Networking

Docker networking allows containers to communicate with each other and with the host system.

Types of Networks

1. Bridge (default)

- Containers get their own IP
- Communicate with other containers on the same bridge
- Host access requires port mapping

2. Host

- Shares host network stack
- No network isolation
- High performance

3. None

- Completely isolated
- No network connectivity
- Useful for testing security

Example:

```bash
docker run -d --network bridge nginx
docker run -d --network host nginx
docker run -d --network none nginx
```

---

## 💾 Docker Volume Mounting

Volumes allow you to persist data and share it between containers.

Types of Volume Mounts

1. Named Volumes

```bash
docker volume create my-volume
docker run -d -v my-volume:/data --name app nginx
```

2. Bind Mounts (Host Directory)

```bash
docker run -d -v C:\Projects\app:/app --name app nginx
```

Volumes are persistent
Bind mounts are great for development

---

## ⚡ Efficient Caching Layers

Docker builds images in layers, and caching improves build speed.

Tips
Copy dependencies first, then the rest of the code
Group commands to minimize rebuilds

---

## 🏗️ Docker Multi-Stage Builds

Multi-stage builds create smaller, optimized images by separating build and runtime stages.

Example: Node.js App

```bash
# Build stage
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Final stage
FROM node:20-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --production
CMD ["node", "dist/index.js"]
```

---

## 🖥️ Common Docker Commands

```bash
docker run hello-world
docker ps
docker start <container>
docker exec -it <container> sh
docker stop <container>
```

---

## ⚠️ Notes

- Some containers don’t support `bash`, use `sh` instead
- Example:

```bash
docker exec -it <container> sh
```

---

## 🎯 Conclusion

Docker simplifies development by:

- Ensuring consistency across environments
- Reducing setup time
- Avoiding dependency conflicts

---

## 📌 Author

Suman Sunuwar
