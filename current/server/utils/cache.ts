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

export default cache;
