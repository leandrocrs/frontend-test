FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install --loglevel=warn -g bower gulp-cli

COPY package.json /usr/src/app/
RUN npm install --loglevel=warn

# Bundle app source
COPY . /usr/src/app

# Client dependencies
RUN bower install --loglevel=warn --allow-root

EXPOSE 7007

CMD [ "gulp", "default" ]