FROM node:18.19-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200

# Run the built-in Angular dev server accessible outside the container
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
