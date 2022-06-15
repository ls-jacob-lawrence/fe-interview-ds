import React, { ButtonHTMLAttributes } from 'react';
import { css } from '../../stitches.config';

const style = css({
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
});

/**
 * A basic Button which accepts all HTMLButton Attributes
 */
export function Button({
    children,
    ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={style()} {...restProps}>
            {children}
        </button>
    );
}
