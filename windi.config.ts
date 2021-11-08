import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    attributify: true,
    darkMode: 'media',
    plugin: [
        require('@windicss/animations'),
        require('@windicss/plugin-heropatterns'),
        require('@windicss/plugin-icons'),
        require('@windicss/plugin-scrollbar'),
        require('@windicss/plugin-question-mark'),
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
