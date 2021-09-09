import { useEffect, useState } from 'react';

import { API_AGES, API_NAMES } from '../constants';
import { combineData } from './utils';

import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    // TODO: abstract type
    age?: number;
    id: string;
    firstName?: string;
    lastName?: string;
  }[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const agesResponse = await fetch(API_AGES);
      const ageResponseJSON = await agesResponse.json();

      const namesResponse = await fetch(API_NAMES);
      const namesResponseJSON = await namesResponse.json();

      const combinedData = combineData(ageResponseJSON, namesResponseJSON) 
      setData(Array.from(combinedData.values()))
      setIsLoading(false);
    }

    fetchData();
  }, []);
  
  return (
    <div className="App">
      {isLoading && <span>Loading...</span>}
      {!isLoading && data && (
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
            {data.map((row) => (
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
