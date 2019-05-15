// Test away!
import React from 'react';
import Display from './Display';
import {render, fireEvent} from 'react-testing-library';

import 'react-testing-library/cleanup-after-each';

describe('<Display />', () => {
  it('Should render successfully', () => {
    const {getByText} = render(<Display />);
    getByText(/^unlocked$/i);
    getByText(/^open$/i);
  });
});
