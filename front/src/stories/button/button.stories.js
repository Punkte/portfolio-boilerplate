import React from 'react';
import Button from '../../components/molecules/Button';

export const DefaultButton = () => <Button onClick={() => alert('clicked')}>Click me</Button>;
export const NavlinkButton = () => <Button onClick={() => alert('clicked')} variant="navlink">Click me</Button>;