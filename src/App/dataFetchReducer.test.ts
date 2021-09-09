import dataFetchReducer from './dataFetchReducer';

describe('dataFetchReducer', () => {
	const initialState = {
		isLoading: true,
		hasError: false,
	}
	
	it('handles START_FETCH', () => {
		const returnedState = dataFetchReducer(initialState, { type: 'START_FETCH'});

		expect(returnedState).toEqual({
			data: undefined,
			hasError: false,
			isLoading: true
		});
	});

	it('handles HANDLE_FETCH_SUCCESS', () => {
		const payload = {
			agesResponse: [{
				id: '1',
				age: 21,
			}],
			namesResponse: [{
				id: '1',
				firstName: 'Foo',
				lastName: 'bar',
			}]
		};

		const returnedState = dataFetchReducer(initialState, {
			type: 'HANDLE_FETCH_SUCCESS',
			payload,
		});

		const expectedData = [{ age: 21, id: '1', firstName: 'Foo', lastName: 'bar' }];
		expect(returnedState).toEqual({
			data: expectedData,
			hasError: false,
			isLoading: false
		});
	});

	it('handles HANDLE_FETCH_FAILURE', () => {
		const returnedState = dataFetchReducer(initialState, { type: 'HANDLE_FETCH_FAILURE' });

		expect(returnedState).toEqual({
			data: undefined,
			hasError: true,
			isLoading: false
		});
	});

	it('throws an error when given an unexpected action', () => {
		expect(() => {
			// @ts-ignore
			dataFetchReducer(initialState, { type: 'unexpectedAction' });
		}).toThrow();
	});
});

