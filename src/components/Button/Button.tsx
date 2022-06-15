import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: JSX.Element;
    disabled?: boolean;
};

const styles: React.CSSProperties = {
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    padding: '16px',
    color: 'white',
    backgroundColor: '#2E61DE',
    cursor: 'pointer',
    margin: '0',
};
export function Button({
    children,
    disabled = false,
    ...restProps
}: ButtonProps) {
    return (
        <button style={styles} disabled={disabled} {...restProps}>
            {children}
        </button>
    );
}
