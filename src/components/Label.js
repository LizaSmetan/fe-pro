import { useEffect, useState } from 'react';

const Label = ({titlesdgfhbsndfsdf}) => {
  const [stateLabel, setStateLabel] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      alert(`Доброго ранку, сьогодні ${new Date()}`)
    }, 1000)
  })
  useEffect(() => {
    console.log('Дякуємо, що лишаєтесь з нами')
    return () => {
      localStorage.setItem('random', Math.floor(Math.random() * 11))
    }
  }, [stateLabel])
  // useEffect === { componentDidMount + componentDidUpdate + componentWillUnmount }
  return (
    <h2>
      {stateLabel || titlesdgfhbsndfsdf}
      <button onClick={() => setStateLabel('dfjksmdfsdf')}>Label</button>
    </h2>
  );
}
export default Label
