import Redis from 'ioredis';

const host = process.env.REDIS_HOST || 'localhost';
const redisConfig: any = {
  host,
  password: process.env.REDIS_PASSWORD,
  port: +(process.env.REDIS_PORT || '6379') || 6379,
  keyPrefix: process.env.REDIS_KEY_PREFIX || '',
};
if (host !== 'localhost') {
  redisConfig.tls = {host};
}
const cache = new Redis(redisConfig);

export const cacheKeyPrefix = process.env.REDIS_KEY_PREFIX;

export const getCacheJson = async (key: string): Promise<any> => {
  const json = await cache.get(key);
  if (!json) {
    console.log('>>cache_not_found<<', key);
    return undefined;
  }
  let data;
  try {
    data = JSON.parse(json);
  } catch (error) {
    console.log('>>cache_error<<', key, error);
  }
  return data;
}

export const setCacheJson = async (key: string, value: any): Promise<void> => {
  await cache.set(key, JSON.stringify(value, null, 2));
  await cache.expire(key, 60 * 60 * 24);
};

export default cache;
