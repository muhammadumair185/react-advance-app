# Use an official Node.js image as the base image
FROM node:16

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Serve the app using a simple HTTP server
RUN npm install -g serve --unsafe-perm=true

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
