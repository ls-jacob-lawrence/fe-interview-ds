import React, { ButtonHTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

type Variants = {
    width: 'full' | 'auto';
};
const StyledButton = styled('button', {
    fontFamily: 'sans-serif',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    padding: '16px',
    color: '$white',
    backgroundColor: '$blue500',
    cursor: 'pointer',
    margin: '0',
    transition: 'background-color 0.2s linear',
    '&:hover': {
        backgroundColor: '$blue700',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: '$blue100',
    },

    variants: {
        width: {
            full: {
                width: '100%',
            },
            auto: {
                width: 'auto',
            },
        },
    },
});

/**
 * A basic Button which accepts all HTMLButton Attributes
 */
export function Button({
    children,
    width = 'auto',
    ...restProps
}: Variants & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <StyledButton width={width} {...restProps}>
            {children}
        </StyledButton>
    );
}
