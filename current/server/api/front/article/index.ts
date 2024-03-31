import axios from 'axios';

import login from '~/server/utils/login';

export default defineEventHandler(async (event) => {

  const token = await login();

  console.log(event.node.req.url);

  const apiBaseUrl = process.env.API_BASE_URL;
  const url = `${apiBaseUrl}/articles?populate[category]=*&&populate[tags]=*&populate[media][populate]=*`
    + `&locale=en&sort[0]=id:desc&&pagination[pageSize]=4`;

  const response = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const { data: responseData = {} } = response;
  const { data, meta } = responseData;

  return {
    success: true,
    meta,
    data,
  };

});
