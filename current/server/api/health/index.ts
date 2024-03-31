export default defineEventHandler(async (event) => {

  return {
    success: true,
    data: {
      uptime: process.uptime(),
    },
  };

});
