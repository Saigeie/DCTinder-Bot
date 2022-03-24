declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      DB: string;
      API_URL: string;
      GUILD_ID: string;
    }
  }
}

export {}
