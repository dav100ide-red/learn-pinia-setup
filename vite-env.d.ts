/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly COUNTER_ENDPOINT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
