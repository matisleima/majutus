# Stage 1: Build the Vue.js application
FROM node:14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Add a command to list the contents of /app to verify that 'dist' directory is created
RUN ls -al /app

# Stage 2: Serve the application with a server, for example, Nginx
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container has launched
CMD ["nginx", "-g", "daemon off;"]
