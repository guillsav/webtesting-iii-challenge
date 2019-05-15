// Test away
import React from 'react';
import Dashboard from './Dashboard';
import {render, fireEvent} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

describe('<Dashboard />', () => {
  it('Should render sucessfully', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });

  it('Should close the gate', () => {
    const {getByText} = render(<Dashboard />);
    const btnCloseGate = getByText(/close gate/i);

    fireEvent.click(btnCloseGate);
    getByText(/closed/i);
  });

  it('Should lock the gate', () => {
    const {getByText} = render(<Dashboard />);

    const btnCloseGate = getByText(/^close gate$/i);
    fireEvent.click(btnCloseGate);
    getByText(/^closed$/i);

    const btnLockGate = getByText(/^lock gate$/i);
    fireEvent.click(btnLockGate);
    getByText(/^locked$/i);
  });

  it('Should unlock the gate', () => {
    const {getByText} = render(<Dashboard />);

    const btnCloseGate = getByText(/^close gate$/i);
    fireEvent.click(btnCloseGate);
    getByText(/^closed$/i);

    const btnLockGate = getByText(/^lock gate$/i);
    fireEvent.click(btnLockGate);
    getByText(/^locked$/i);

    const btnUnlockGate = getByText(/^unlock gate$/i);
    fireEvent.click(btnUnlockGate);
    getByText(/^unlocked$/i);
  });
});
