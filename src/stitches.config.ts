import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            blue100: '#D6DFFD',
            blue500: '#2E61DE',
            blue700: '#0A2BB3',
            text: '#464A51',
            gray100: '#D7DCE1',
        },
    },
});
