# Use the official Node.js image as the base
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json or yarn.lock for dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./static
COPY --from=builder /app/.next/server ./server
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port that your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
