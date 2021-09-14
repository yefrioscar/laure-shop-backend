module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        // client: 'sqlite',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "12345"),
        // schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        // ssl: {
        //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        // },
      },
      options: {},
    },
    //hola
  },
});
