import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Button', () => {
    it('should render', () => {
        render(<Text>My text</Text>);
        expect(screen.getByText('My text')).toBeInTheDocument();
    });
});
