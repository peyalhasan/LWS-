import React, { useContext, useEffect, useEffectEvent, useState } from 'react';
import logVisit from '../Utils/logVisit';
import shoppingCartContext from '../Context/shoppingCartContext';

const Page = ({url}) => {
    const items = useContext(shoppingCartContext);
    const numberOfItems = items.length;

    function App(){
  const [age] = useState(10)

  useEffect(()=>{
  alert("Your age is: ",age)
  },)

  //
}
    const onVisit = useEffectEvent((url) =>{
        logVisit(url, numberOfItems)
    })

    useEffect(()=>{
        onVisit(url)
    },[url])
    return (
        <div>
            <h1>This is page</h1>
        </div>
    );
};

export default Page;

function Form() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      post('/api/register');
      showNotification('Successfully registered!');
    }
  }, [submitted]);

  function handleSubmit() {
    setSubmitted(true);
  }

  // ...
}