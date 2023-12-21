import '@testing-library/jest-dom'
import { setProjectAnnotations } from '@storybook/testing-react'
import preview from './.storybook/preview'
import "./src/app/page.module.css";
import "./src/app/globals.css"
import { startServer } from './src/utils/test-utils';
import { beforeAll, afterAll, afterEach } from 'vitest';

setProjectAnnotations(preview);


const server = startServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());