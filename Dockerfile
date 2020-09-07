FROM node

RUN apt-get update && \
    yarn global add nodemon
    
WORKDIR /app

COPY . .

RUN yarn install

CMD yarn start