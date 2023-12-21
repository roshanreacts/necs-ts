import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'

const { Primary } = composeStories(stories);

describe('Button', () => {
    test('renders with primary', () => {
        render(<Primary />)
        expect(screen.getByRole('button')).toHaveTextContent('Click me!')
    })
});
