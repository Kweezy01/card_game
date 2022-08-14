import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("all_cards", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.card.findMany();
    }
  });
