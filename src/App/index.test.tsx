import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { server } from '../mocks/server.js'

import App from '.';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// See src/mocks/handlers.js for mocked data

it('renders rows returned from names endpoint', async () => {
  render(<App />);

  await waitForElementToBeRemoved(screen.getByText('Loading...'));

  const rows = screen.getAllByRole('row');
  expect(rows[1]).toHaveTextContent('1HankHill79');
  expect(rows[2]).toHaveTextContent('2PeggyHill12');
  expect(rows[3]).toHaveTextContent('4LuanneKleinschmidt71');
  expect(rows[4]).toHaveTextContent('5DaleGribble51');
  expect(rows[5]).toHaveTextContent('8CottonHill14');
  expect(rows[6]).toHaveTextContent('9BuckStrickland71');
  expect(rows[7]).toHaveTextContent('10--83');
  expect(rows[8]).toHaveTextContent('3BobbyHill-');
  expect(rows[9]).toHaveTextContent('6BillDauterive-');
  expect(rows[10]).toHaveTextContent('7JeffBoomhauer-');
});
