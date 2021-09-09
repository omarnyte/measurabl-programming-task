import { rest } from 'msw';

import { API_AGES, API_NAMES } from '../constants';

export const handlers = [
	rest.get(API_AGES, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(
				[
					{
							"id": "1",
							"age": 79
					},
					{
							"id": "2",
							"age": 12
					},
					{
							"id": "4",
							"age": 71
					},
					{
							"id": "5",
							"age": 51
					},
					{
							"id": "8",
							"age": 14
					},
					{
							"id": "9",
							"age": 71
					},
					{
							"id": "10",
							"age": 83
					}
				]
			)
		)
	}),
	rest.get(API_NAMES, (req, res, ctx) => {
		return res(
			ctx.json(
				[
					{
							"id": "1",
							"firstName": "Hank",
							"lastName": "Hill"
					},
					{
							"id": "2",
							"firstName": "Peggy",
							"lastName": "Hill"
					},
					{
							"id": "3",
							"firstName": "Bobby",
							"lastName": "Hill"
					},
					{
							"id": "4",
							"firstName": "Luanne",
							"lastName": "Kleinschmidt"
					},
					{
							"id": "5",
							"firstName": "Dale",
							"lastName": "Gribble"
					},
					{
							"id": "6",
							"firstName": "Bill",
							"lastName": "Dauterive"
					},
					{
							"id": "7",
							"firstName": "Jeff",
							"lastName": "Boomhauer"
					},
					{
							"id": "8",
							"firstName": "Cotton",
							"lastName": "Hill"
					},
					{
							"id": "9",
							"firstName": "Buck",
							"lastName": "Strickland"
					}
			]
			)
		)
	})
];

