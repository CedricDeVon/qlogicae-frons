FROM oven/bun:1-alpine AS builder
WORKDIR /app
ENV BUILD_TARGET=node
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json /app/bun.lock ./
RUN bun install --frozen-lockfile --production
EXPOSE 3000
CMD ["bun", "./build/index.js"]
