import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

type Variants = {
    size?: 'large' | 'small';
    bold?: boolean;
    align?: 'left' | 'right' | 'center';
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'a';
};
const T = styled('div', {
    fontFamily: 'sans-serif',
    color: '$text',
    margin: '0',
    padding: '0',

    variants: {
        size: {
            small: {
                fontSize: '14px',
            },
            large: {
                fontSize: '24px',
            },
        },
        bold: {
            true: {
                fontWeight: 700,
            },
        },
    },

    defaultVariants: {
        size: 'small',
    },
});

/**
 * Text which accepts all HTMLAttributes
 */
export function Text({
    children,
    ...restProps
}: Variants & HTMLAttributes<HTMLElement>) {
    return <T {...restProps}>{children}</T>;
}
