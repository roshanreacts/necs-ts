# Use an official Node.js runtime as the base image
FROM --platform=amd64 oven/bun:latest
# Set the working directory in the Docker container
WORKDIR /usr/src/app

# RUN apk update && apk upgrade && \
#     apk add --no-cache bash git openssh
# RUN yarn set version 3.6.4

# Copy package.json and package-lock.json (or yarn.lock if you are using Yarn) into the Docker container
# COPY package.json yarn.lock ./

# Copy the rest of the project files into the Docker container
COPY . .

# Install the project dependencies inside the Docker container
# RUN bun install


# Build the Next.js app
# RUN bun run build

# Expose ports 3000 and 6006 for Next.js and Storybook respectively
EXPOSE 3000 6006

# Start the Next.js app and Storybook when the Docker container is run
CMD ["sh", "-c", "bun run start"]