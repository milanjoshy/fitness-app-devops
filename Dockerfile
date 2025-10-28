# Use an official lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Expose port 3000 so the container can be accessed
EXPOSE 3000

# The command that starts your application
CMD ["node", "index.js"]