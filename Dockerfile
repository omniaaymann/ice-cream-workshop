# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

#Setup the working directory
WORKDIR /usr/src/angular-prime-template

#Copy package.json's
COPY package*.json ./

# Install all the dependencies
RUN npm install

#Copy other files and folder to working directory
copy . .

# Generate the build of the application
RUN npm run build --prod

# Stage 2: Serve the application

#Download NGINX Image
FROM nginx:latest

#Copy built angular files to NGINX HTML folder
COPY --from=build /usr/src/angular-prime-template/dist/angular-project-sample/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80
