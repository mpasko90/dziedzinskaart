import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://admin.dziedzinskaart.com/graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true, // Wymusza użycie importów typu
        avoidOptionals: true, // Usuwa opcjonalne typy, które mogą powodować błędy
      },
    },
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        useTypeImports: true,
        avoidOptionals: true, // Usuwa opcjonalne typy w generowanych typach
      },
    },
  },
  hooks: {
    afterAllFileWrite: [], // Tymczasowo usuń Prettier z procesu generowania
  },
};

export default config;
