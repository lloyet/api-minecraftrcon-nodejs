# Api Minecraft RCON

Minecraft Command line API to send NMS raw commands using RCON protocole.

**Swagger Documentaton:** `http://localhost:3000/swagger/json`

## Quick start

### Before Start

Download and install [Node.js]([https://docs.docker.com/get-started/get-docker/](https://nodejs.org/en/download)).

Copy and past `.example.env` file to `.env`, then modify environnement variables you need to configure:

```sh
HOST=0.0.0.0
PORT=3000
RCON_HOST=0.0.0.0
RCON_PORT=25575
RCON_PASSWORD=secret
RCON_TIMEOUT=10000
PUBLIC_API_URL=http://0.0.0.0:3000
```

### Installation And Run

```sh
# Install dependencies
npm ci

# Run application as dev
npm run dev

---

# Build application (optional)
npm run build

# Run application as production (optional)
node build/index.js
```

### How to deploy with Docker

<ins>**Before start**</ins>

Download and install [Docker](https://docs.docker.com/get-started/get-docker/).

```sh
# Start service (api-minecraft-rcon-nodejs)
docker compose up -d --build

# Stop service (api-minecraft-rcon-nodejs)
docker compose down
```

Configure required envioronnement variables:

```yml
services:
  minecraft-wiki-arena-api:
    environment:
      - RCON_HOST=localhost
      - RCON_PORT=25575
      - RCON_PASSWORD=YOUR-PASSWORD
      - RCON_TIMEOUT=10000
      - PUBLIC_API_URL=http://localhost:3000
```

Here are all environnement variables you can configure:

```sh
HOST=0.0.0.0
PORT=3000
RCON_HOST=0.0.0.0
RCON_PORT=25575
RCON_PASSWORD=secret
RCON_TIMEOUT=10000
PUBLIC_API_URL=http://0.0.0.0:3000
```

## Update And Deployement CI/CD

This repository is using Github action as **CI/CD** to build Docker image on Github registry.

This **CI/CD** build image for processors `amd64` and `arm64`.

> [!NOTE]
>
> This **CI/CD** is automatically triggered when a new tag (ex: `x.x.x`) is publish on the `main` branch.

**How to update:**

1. Modify code and test.
2. Commit your update on the `main` branch.
3. Create a tag (ex: `1.0.0`), then publish this new tag on the `main` branch.
