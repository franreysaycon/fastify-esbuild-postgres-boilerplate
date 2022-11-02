import fp from "fastify-plugin"
import swagger, { FastifyDynamicSwaggerOptions } from "@fastify/swagger"
import swaggerUi from "@fastify/swagger-ui"

export default fp<FastifyDynamicSwaggerOptions>(async (fastify) => {
  await fastify.register(swagger)
  await fastify.register(swaggerUi, {
    routePrefix: "/documentation",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next()
      },
      preHandler: function (request, reply, next) {
        next()
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  })
})
