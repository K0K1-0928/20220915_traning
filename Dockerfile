FROM node:16-bullseye

USER node
WORKDIR /workspace
ENTRYPOINT ["tail", "-f", "/dev/null"]
