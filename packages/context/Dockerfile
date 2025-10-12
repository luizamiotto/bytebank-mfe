FROM node:20-alpine AS base

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN npm install -g turbo
COPY . .

# Install all dependencies
RUN npm install

# Build all packages first
RUN turbo build

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 webuser
USER webuser

# Copy the entire built workspace
COPY --from=installer --chown=webuser:nodejs /app ./

WORKDIR /app/packages/context

EXPOSE 9002

CMD ["npm", "start"]