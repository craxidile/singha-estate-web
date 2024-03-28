import cache from "~/server/utils/cache";
import login from '~/server/utils/login';

export default defineEventHandler(async (event) => {

  console.log(event.node.req.url);

  const token = await login();

  return {
    success: true,
    uptime: process.uptime(),
  }
});
