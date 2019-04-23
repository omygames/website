FROM node:10.15.3

RUN node -v
RUN npm -v
RUN yarn -v

# Set a working directory
WORKDIR /usr/my_app

# Copy application files
COPY . /usr/my_app

RUN yarn
RUN yarn build

# Exec
CMD [ "yarn", "start:prod" ]
