import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { server } from './mocks/server.js'

import App from './App';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('renders all rows returned from names endpoint', async () => {
  render(<App />);

  await waitForElementToBeRemoved(screen.getByText('Loading...'));

  expect(screen.getByText("Bobby")).toBeInTheDocument();
});
