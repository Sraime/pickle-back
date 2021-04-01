module.exports = {
  type: 'postgres',
  url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`,
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};
