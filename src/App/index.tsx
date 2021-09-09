import { useEffect, useReducer } from 'react';

import { API_AGES, API_NAMES } from '../constants';
import dataFetchReducer from './dataFetchReducer';

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
      {state.isLoading && <span>Loading...</span>}
      {!state.isLoading && state.data && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
