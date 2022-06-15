import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('should render', () => {
        const click = jest.fn();
        render(<Button onClick={click}>My button</Button>);
        const myButton = screen.getByText('My button');
        expect(myButton).toBeInTheDocument();
        myButton.click();
        expect(click).toHaveBeenCalled();
    });
});
