process.loadEnvFile("./src/.env")

export const config={
    PORT: process.env.PORT || 3001,
    MODE: process.env.MODE || "production"
}