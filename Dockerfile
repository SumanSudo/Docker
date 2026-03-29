FROM ubuntu:22.04

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_25.x -o /tmp/nodesource_setup.sh && \
    bash /tmp/nodesource_setup.sh && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
COPY main.js .

RUN npm install

ENTRYPOINT ["node", "main.js"]