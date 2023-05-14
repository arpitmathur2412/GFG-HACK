FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm       
COPY . .
CMD ["npm", "start"]