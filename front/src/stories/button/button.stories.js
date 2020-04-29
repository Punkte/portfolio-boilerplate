import React from 'react';
import Button from '../../components/molecules/Button';

export const DefaultButton = (props) => <Button {...props} data-testid="default-button">Click me</Button>;
export const NavlinkButton = (props) => <Button {...props} variant="navlink" data-testid="navlink-button">Click me</Button>;