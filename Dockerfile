FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install express

# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "node", "multiserver.js" ]

# .dockerignore
# sudo systemctl start docker
# sudo docker build -t <docker_user>/node01 .
# sudo docker run -p 4000:4000 -d <docker_user>/node01

# sudo docker login --username=<docker_user> --email=<docker_email>
# sudo docker push <docker_user>/node01:latest

