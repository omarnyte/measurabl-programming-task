import React from 'react';
import { render, screen } from '@testing-library/react';

import PeopleTable from '.';

describe('PeopleTable', () => {
	it("renders all columns if row contains all columns", () => {
		const row = { age: 123, firstName: 'John', id: '1', lastName: 'Doe' };
		render(<PeopleTable rows={[row]} />)

		const firstBodyRow = screen.getAllByRole('row')[1];
		expect(firstBodyRow).toHaveTextContent('1JohnDoe123')
	});

	it("renders a '-' for any missing column", () => {
		render(<PeopleTable rows={[{ id: '1' }]} />)

		const firstBodyRow = screen.getAllByRole('row')[1];
		expect(firstBodyRow).toHaveTextContent('1---')
	});
});
