import { AgesResponse, NamesResponse } from './types';
import { combineData } from './utils';

type State = {
	hasError: boolean;
	isLoading: boolean;
	data?: {
		age?: number;
		firstName?: string;
		id: string;
		lastName?: string;
	}[];
}

type Action = 
  | { type: 'START_FETCH' } 
  | { type: 'HANDLE_FETCH_SUCCESS', payload: {
		agesResponse: AgesResponse;
		namesResponse: NamesResponse;
	} } 
  | { type: 'HANDLE_FETCH_FAILURE' } 

const dataFetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'START_FETCH':
      return { 
        ...state,
        data: undefined,
        isLoading: true,
        hasError: false,
      }
    case 'HANDLE_FETCH_SUCCESS':
			const { agesResponse, namesResponse } = action.payload;
			const data = combineData(agesResponse, namesResponse);

      return { 
        ...state,
				data,
        isLoading: false,
        hasError: false,
      }
    case 'HANDLE_FETCH_FAILURE':
      return { 
        ...state,
        data: undefined,
        isLoading: false,
        hasError: true,
      }
    default:
      throw new Error('Not a valid action type.')
  }
}

export default dataFetchReducer;
