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
        // Violeta sereno: color principal
        marca: {
          50: '#f4f2fb',
          100: '#e6e1f6',
          200: '#cdc3ec',
          300: '#ae9fdd',
          400: '#8d79c9',
          500: '#7260b3',
          600: '#5d4c9a',
          700: '#4b3d80',
          800: '#3b3066',
          900: '#2c2450',
          950: '#17122d'
        },
        // Coral suave: acento para llamadas a la acción secundarias
        acento: {
          100: '#fde6dc',
          300: '#f7b79c',
          500: '#ea8a64',
          600: '#b8532c'
        },
        // Neutros cálidos
        arena: {
          50: '#faf8fc',
          100: '#f2eef8',
          200: '#e4ddef'
        },
        tinta: {
          500: '#57546a',
          700: '#2f2c45',
          900: '#191730'
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
