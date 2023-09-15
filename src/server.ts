import { fastify } from "fastify";
import { prisma } from './lib/prisma'
import { getAllPromptsRoutes } from "./routes/get-all-prompts";

const app = fastify();

app.register(getAllPromptsRoutes)

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP Server Running!")
})