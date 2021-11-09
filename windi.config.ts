import { defineConfig } from 'windicss/helpers';
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'

export default defineConfig({
    attributify: {
        prefix: 'wd'
    },
    darkMode: 'media',
    plugin: [
        require('@windicss/animations'),
        require('@windicss/plugin-heropatterns'),
        require('@windicss/plugin-icons'),
        require('@windicss/plugin-scrollbar'),
        require('@windicss/plugin-question-mark'),
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/forms'),
        require('windicss/plugin/filters'),
        require('windicss/plugin/line-clamp'),
        scrollSnapPlugin,
        require('windicss/plugin/typography'),
    ],
    preflight: true,
    shortcuts: {
        'glass-morphic': '!bg-clip-padding !backdrop-filter !backdrop-blur-xl bg-opacity-80',
        'glass-border': 'border dark:border-gray-700 border-gray-200',
        'center-container': 'flex items-center justify-content-center',
    },
    theme: {
        extend: {
            fontFamily: {
                mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
                accent: ['Rouge Script', 'Open Sans'],
                heading: ['Pacifico', 'Roboto', 'Open Sans'],
                monofett: ['monofett', 'Open Sans'],
            }
        },
    },
});
