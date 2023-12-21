import { setProjectAnnotations } from '@storybook/testing-react'
import { decorators } from './.storybook/preview'
import '@testing-library/jest-dom'
import "./src/app/page.module.css";
import "./src/app/globals.css"
import { startServer } from './src/utils/test-utils';
import { beforeAll, afterAll, afterEach } from 'vitest';

setProjectAnnotations({
    decorators: decorators as any,
});


const server = startServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());