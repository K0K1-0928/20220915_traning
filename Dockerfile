FROM node:16-bullseye

RUN apt-get update && \
    apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER node
WORKDIR /workspace

COPY --chown=node:node package*.json .
RUN npm install

COPY --chown=node:node . .

ENTRYPOINT ["tail", "-f", "/dev/null"]
