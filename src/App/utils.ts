import { AgesResponse, NamesResponse } from './types';

export const combineData = (agesResponse: AgesResponse, namesResponse: NamesResponse) => {
	const combinedData = new Map<string, {
    // TODO: abstract type
		age?: number;
		id: string;
		firstName?: string;
		lastName?: string;
	}>();

	agesResponse.forEach(({ age, id }) => {
		combinedData.set(id, { age, id });
	});

	namesResponse.forEach(({ id, firstName, lastName }) => {
		if (combinedData.has(id)) {
			const updatedData = { ...combinedData.get(id), firstName, id, lastName };
			combinedData.set(id, updatedData);
		} else {
			combinedData.set(id, { firstName, id, lastName });
		}
	});

	return combinedData;
}