import { useEffect, useReducer } from 'react';

import { API_AGES, API_NAMES } from '../constants';
import dataFetchReducer from './dataFetchReducer';
import PeopleTable from '../PeopleTable';

import './index.css';

const initialState = {
  hasError: false,
  isLoading: false,
}

function App() {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'START_FETCH' });
      const agesResponse = await fetch(API_AGES);
      const ageResponseJSON = await agesResponse.json();

      const namesResponse = await fetch(API_NAMES);
      const namesResponseJSON = await namesResponse.json();

      dispatch({
        type: 'HANDLE_FETCH_SUCCESS',
        payload: {
          agesResponse: ageResponseJSON,
          namesResponse: namesResponseJSON,
        }
      });
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>People</h1>
      {state.isLoading && <span>Loading...</span>}
      {!state.isLoading && state.data && (
        <PeopleTable rows={state.data} />
      )}
    </div>
  );
}

export default App;
