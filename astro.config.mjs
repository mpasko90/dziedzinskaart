import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
    integrations: [
        react(),
        tailwind(),
        icon({
            collections: {
                mdi: () => import('@iconify-json/mdi/icons.json'),
            },
        }),
    ],
    site: 'https://dziedzinskaart.com',
});
