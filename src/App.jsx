import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    return () => { };
  }, []);

  return (
    <div data-component="app">
      sanyi
    </div>
  )
}