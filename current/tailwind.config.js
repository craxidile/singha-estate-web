/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './views/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontSize: {
        'icon-xs': '1.25rem',
        'icon-sm': '1.5rem',
        'icon-md': '1.8rem',
        'icon-lg': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Thai', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        body: ['Inter', 'Noto Sans Thai', 'sans-serif'],
      },
      colors: {
        'gray': {
          '100': '#E2E2E2',
          '200': '#C2C2C2',
          '300': '#A3A3A3',
          '400': '#858585',
          '500': '#696969',
          '600': '#4E4E4E',
          '700': '#2C2C2C',
          '800': '#1B1B1B',
        },
        'earth': {
          '100': '#E9E2DC',
          '200': '#D1BFAF',
          '300': '#B59F8B',
          '400': '#96816D',
          '500': '#796553',
          '600': '#584B3F',
          '700': '#332B25',
          '800': '#24190C',
        },
        'se-gold': {
          '100': '#EBE1CD',
          '200': '#D3C097',
          '300': '#B2A17D',
          '400': '#948668',
          '500': '#736850',
          '600': '#554D3A',
          '700': '#312C22',
          '800': '#1E1B16',
        },
        'se-blue': {
          '100': '#DAE3F5',
          '200': '#ADC4EE',
          '300': '#7FA5E6',
          '400': '#5188D4',
          '500': '#3F6CAA',
          '600': '#2D4F7F',
          '700': '#1A2F4D',
          '800': '#101C2E',
        },
        'se-yellow': {
          '100': '#F4DBA5',
          '200': '#E1B857',
          '300': '#CBA449',
          '400': '#9A7C35',
          '500': '#786028',
          '600': '#57451B',
          '700': '#382C0F',
          '800': '#1C1505',
        },
        'cream': '#F7F2EC',
        'cream-300': 'rgba(248, 243, 237, 0.8)',
        'txt': {
          'dark': {
            'main': '#2C2C2C',
            'desc': '#696969',
            'disabled': '#A3A3A3',
          },
          'light': {
            'main': '#FFFFFFFF',
            'desc': 'rgba(255, 255, 255, 0.7)',
            'disabled': 'rgba(255, 255, 255, 0.5)',
          },
          'gold': {
            'main': '#948668',
            'desc': '#B2A17D',
            'disabled': '#736850',
          },
          'blue': {
            'main': '#1A2F4D',
            'beam': '#152741',
          },
          'yellow': {
            'main': '#CBA449',
          },
        },
        'error': {
          'main': '#CF1738',
        },
        'btn': {
          'primary': {
            'idle': '#948668',
            'hovered': '#B2A17D',
            'pressed': '#736850',
            'disabled': '#E2E2E2',
          },
          'secondary': {
            'idle': '#EBE1CD',
            'hovered': '#EBE1CD',
            'pressed': '#D3C097',
            'disabled': '#E2E2E2',
          },
          'ghost': {
            'idle': '#948668',
            'hovered': '#B2A17D',
            'pressed': '#B2A17D',
            'disabled': '#80948668',
          },
          'siraninn': {
            'idle': '#B49A81',
            'hovered': '#BCA58F',
            'pressed': '#A68769',
            'disabled': '#E2E2E2',
          },
        },
        'backdrop': {
          'earth': {
            '100': 'rgba(233, 226, 220, 0.6)',
            '200': 'rgba(233, 226, 220, 0.7)',
            '300': 'rgba(233, 226, 220, 0.8)',
            '400': 'rgba(233, 226, 220, 0.9)',
          },
          'blue': {
            '100': 'rgba(21, 39, 65, 0.6)',
            '200': 'rgba(21, 39, 65, 0.7)',
            '300': 'rgba(21, 39, 65, 0.8)',
            '4100': 'rgba(21, 39, 65, 0.9)',
          },
          'light': '#FFFFFF',
          'singha-blue': '#1A2F4D',
        },
        'brand': {
          'srin': {
            'main': '#003B5E',
            'sub': '#004670',
          },
          'smyth': {
            'main': '#875B51',
            'sub': '#936358',
          },
          'esse': {
            'main': '#1A2F4D',
            'sub': '#1F385C',
          },
          'siraninn': {
            'main': '#B49A81',
            'sub': '#BCA58F',
          },
          'shawn': {
            'main': '#654C7B',
            'sub': '#6F5488',
          },
        },
        'placeholder': '#797E81',
      },
      backgroundImage: {
        'gradient-nav-main': 'linear-gradient(90deg, #1A2F4D 0%, #2D4F7F 50%, #1A2F4D 100%)',
        'gradient-nav-stripe': 'linear-gradient(270deg, rgba(209, 191, 175, 0.14) 0%, #D1BFAF 49.48%, rgba(209, 191, 175, 0.14) 100%)',
        'gradient-portfolio': 'linear-gradient(180deg, #1A2F4D 0%, #101C2E 100%)',
        'gradient-smyth': 'linear-gradient(45deg, #5B3427 0%, #9D5B48 48.96%, #B68472 100%)',
        'gradient-ribbon-new': 'linear-gradient(90deg, #836A33 -96.18%, #CDB175 140.46%)',
      },
    },
  },
  plugins: [],
}

