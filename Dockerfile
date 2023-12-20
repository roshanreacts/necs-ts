# Use an official Node.js runtime as the base image
FROM amd64/node:20-alpine

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock if you are using Yarn) into the Docker container
# COPY package.json yarn.lock ./

# Copy the rest of the project files into the Docker container
COPY . .

# Install the project dependencies inside the Docker container
RUN yarn install


# Build the Next.js app
# RUN yarn build

# Expose ports 3000 and 6006 for Next.js and Storybook respectively
EXPOSE 3000 6006

# Start the Next.js app and Storybook when the Docker container is run
CMD ["sh", "-c", "yarn dev & yarn storybook"]