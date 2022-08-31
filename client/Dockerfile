FROM node:14 as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
EXPOSE 3000

CMD ["npm", "run", "start"]