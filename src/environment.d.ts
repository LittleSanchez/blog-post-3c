declare namespace NodeJS {
  export interface ProcessEnv {
    /**
      * The env file:
MONGO_USER=khlypavka2004
MONGO_PASSWORD=vbpLwYuo2bMj5Zpy
MONGO_CLUSTER=studing-cluster

PORT=3000
     */
    MONGO_CONNECTION_STRING: string;

    PORT: string;
  }
}
