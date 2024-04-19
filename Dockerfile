# Stage 1: Build the Vue.js application
FROM node:14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Add a command to list the contents of /app to verify that 'dist' directory is created
RUN ls -al /app

# Stage 2: Serve the application with Caddy
FROM caddy:2.3.0
LABEL authors="matis"

# Ensure the correct directory is used to serve files
WORKDIR /usr/share/caddy

# Copy the built application from the previous stage
COPY --from=build-stage /app/dist /usr/share/caddy

# Verify the contents of /usr/share/caddy to ensure files are copied
RUN ls -al /usr/share/caddy

# Caddy runs on port 80 by default
EXPOSE 80

# Command to start Caddy
CMD ["caddy", "file-server", "--listen", ":80"]
