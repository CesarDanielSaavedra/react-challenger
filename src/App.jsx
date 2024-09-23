import React from 'react'
import { useEffect, useState } from 'react'

const ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState('loanding cat random fact...')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ENDPOINT_RANDOM_FACT);
                if(!response.ok){
                    throw new Error(`HTTP error ${response.status}`);
                }
                const data = await response.json();
                setFact(data.fact);
            } catch (error) {
                console.error('Error', error);
            }
        }
    
        fetchData();

    },[])
      
    return (
        <main>
            <h3>Random fact</h3>
            <p>{fact}</p>
        </main>
    );
}