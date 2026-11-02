/**
 * tailwind.config.js — paleta y tipografías de la marca.
 * Para cambiar los colores de un cliente, edite SOLO este archivo
 * (y las variables equivalentes en css/01-base.css) y ejecute "npm run css".
 */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Azul marino: color principal
        marca: {
          50: '#f1f4f9',
          100: '#dde5f0',
          200: '#bccbe0',
          300: '#8fa6c9',
          400: '#5f80ae',
          500: '#3f6191',
          600: '#2f4d78',
          700: '#243d61',
          800: '#1b2f4d',
          900: '#12203a',
          950: '#0a1425'
        },
        // Dorado sobrio: acento para llamadas a la acción secundarias
        acento: {
          100: '#f8ecd2',
          300: '#e6c783',
          500: '#c9993a',
          600: '#8f6516'
        },
        // Neutros cálidos
        arena: {
          50: '#f9f8f6',
          100: '#f1eee8',
          200: '#e3ddd2'
        },
        tinta: {
          500: '#535a68',
          700: '#2b3140',
          900: '#141926'
        }
      },
      fontFamily: {
        titulo: ['Fraunces', 'Georgia', 'serif'],
        texto: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
