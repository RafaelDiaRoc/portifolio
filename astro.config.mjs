import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    tailwind({
      // Desativa a aplicação de estilos base padrão do Tailwind, se necessário.
      // applyBaseStyles: false,
    }), 
    icon({
      // Especifica qual pacote de ícones usar
      iconDir: 'node_modules/@iconify-json/mdi/icons.json',
      include: {
        mdi: ['*']
      }
    })
  ]
});