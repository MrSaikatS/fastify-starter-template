import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const root: FastifyPluginAsyncTypebox = async (fastify): Promise<void> => {
  fastify.route({
    method: "GET",

    url: "/",

    schema: {},

    handler: async (request, reply) => {
      fastify.log.info(request);

      reply.send({ root: true });
    },
  });
};

export default root;
