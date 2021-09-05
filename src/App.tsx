import { useEffect, useState } from 'react';

import { API_AGES, API_NAMES } from './constants';

import './App.css';

type AgesResponse = {
  age: number;
  id: string;
}[];

type NamesResponse = {
  firstName: string;
  id: string;
  lastName: string;
}[];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{ 
    ages: AgesResponse;
    names: NamesResponse;
  } | undefined>(undefined);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const agesResponse = await fetch(API_AGES);
      const ageResponseJSON = await agesResponse.json();

      const namesResponse = await fetch(API_NAMES);
      const namesResponseJSON = await namesResponse.json();

      setData({
        ages: ageResponseJSON,
        names: namesResponseJSON,
      });
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
            {data.names.map((name) => (
              <tr key={name.id}>
                <td>{name.id}</td>
                <td>{name.firstName}</td>
                <td>{name.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
