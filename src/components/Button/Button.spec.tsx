import React from 'react';
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Button.stories'
import { debug } from 'vitest-preview';
const { Primary } = composeStories(stories);

describe('Button', () => {
    test('renders with primary', () => {
        render(<Primary />)
        debug();
        expect(screen.getByText('Click me!')).toBeInTheDocument();
    })
});
