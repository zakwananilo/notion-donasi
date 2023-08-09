# Stage 1: Build the Next.js app
FROM node:18.16-alpine3.18 as builder

# Install additional resource
RUN apk --no-cache add \
        make \
        gcc \
        g++ \
        python3 \
        pkgconfig \
        pixman-dev \
        cairo-dev \
        pango-dev \
        libjpeg-turbo-dev \
        giflib-dev \
        ttf-dejavu

WORKDIR /home/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the app's source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the production-ready app with a lightweight HTTP server
FROM node:18.16-alpine3.18

# Install additional resource
RUN apk --no-cache add \
        make \
        gcc \
        g++ \
        python3 \
        pkgconfig \
        pixman-dev \
        cairo-dev \
        pango-dev \
        libjpeg-turbo-dev \
        giflib-dev \
        ttf-dejavu

WORKDIR /home/app

# Copy the built app from the previous stage
COPY --from=builder /home/app/.next ./.next
COPY --from=builder /home/app/public ./public
COPY --from=builder /home/app/package.json ./package.json
COPY --from=builder /home/app/package-lock.json ./package-lock.json

# Install only production dependencies
RUN npm ci --production

# Expose the desired port (default for Next.js is 3000)
EXPOSE 18017

# Start the app
CMD ["npm", "run", "start"]
