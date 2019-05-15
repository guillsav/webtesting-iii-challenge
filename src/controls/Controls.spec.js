// Test away!
import React from 'react';
import Controls from './Controls';
import {render, fireEvent} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

describe('<Controls />', () => {
  it('check if toggleClosed is called()', () => {
    const mockToggleClosed = jest.fn();
    const {getByText} = render(<Controls toggleClosed={mockToggleClosed} />);
    const btnCloseGate = getByText(/^close gate$/i);
    fireEvent.click(btnCloseGate);

    expect(mockToggleClosed).toHaveBeenCalledTimes(1);
  });

  it('check if toggleLocked() is called', () => {
    const mockToggleLocked = jest.fn();
    const {getByText} = render(
      <Controls toggleLocked={mockToggleLocked} closed={true} />
    );

    const btnLockGate = getByText(/^lock gate$/i);
    fireEvent.click(btnLockGate);
    expect(mockToggleLocked).toHaveBeenCalledTimes(1);
  });
});
