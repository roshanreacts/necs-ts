import { setGlobalConfig } from '@storybook/testing-react'
import * as globalStorybookConfig from './.storybook/preview'
import '@testing-library/jest-dom'
setGlobalConfig(globalStorybookConfig)
