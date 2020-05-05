import React from 'react';
import { addDecorator } from '@storybook/react';
import { configure } from '@storybook/react';

configure(
    [
        require.context("../src", true, /\.stories\.tsx$/),
    ] , module );

addDecorator(storyFn => <div style={style}>{storyFn()}</div>);

const style = {
    display: 'flex',
}