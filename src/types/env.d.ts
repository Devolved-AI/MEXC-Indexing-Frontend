declare namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_USER: postgres;
      POSTGRES_PASSWORD: 5683;
      POSTGRES_HOST: localhost;
      POSTGRES_PORT: 5432;
      POSTGRES_DB: postgres;
      DATABASE_URL: postgres://postgres:5683@localhost:5432/postgres;
    }
  }
  
