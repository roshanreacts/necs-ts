import React from 'react'
import {  test, expect } from 'vitest'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import { debug } from 'vitest-preview'
import { getServer } from '../utils/test-utils'
import * as stories from './Profile.stories'

const { MockedSuccess } = composeStories(stories)

const server = getServer()

test('renders film cards for each film', async () => {
  server.use(...MockedSuccess.parameters.msw.handlers)
  render(<MockedSuccess />)
  debug();
  expect(screen.getByText(/fetching star wars data/i)).toBeInTheDocument()

  await screen.findAllByRole('article')

  const articleNodes = screen.getAllByRole('article')
  expect(articleNodes).toHaveLength(3)

  const headingNodes = screen.getAllByRole('heading')
  expect(headingNodes[0]).toHaveTextContent('A New Hope')
  expect(headingNodes[1]).toHaveTextContent('Empire Strikes Back')
  expect(headingNodes[2]).toHaveTextContent('Return of the Jedi')
})