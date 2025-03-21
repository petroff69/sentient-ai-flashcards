
FROM node:18
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]
