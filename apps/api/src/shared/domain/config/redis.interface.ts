export interface RedisConfig {
  getRedisHost(): string;
  getRedisPort(): number;
  getRedisUrl(): string;
}
