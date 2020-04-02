import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders select "Code One"', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/Code One/i);
    expect(linkElement).toBeInTheDocument();
});
