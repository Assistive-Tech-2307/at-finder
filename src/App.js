import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
import tech from './mockData/mockTech'
import Results from './components/Results';
import LearnAT from './LearnAT/LearnAT';
import About from './components/About';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTechParam, setSelectedTechParam] = useState(null);
  const [techResults, setTechResults] = useState(tech)

  // const handleTechParamsSelection = (category, techParam) => {
  //   setSelectedCategory(category);
  //   setSelectedTechParam(techParam);
  //   fetch('your-api-endpoint', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       needs: {
  //         [category]: {
  //           tech_needs: techParam,
  //           disability_category: needs[category]['disability parameter'],
  //         },
  //       },
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };

      {/* <Form onTechParamsSelection={handleTechParamsSelection} /> */}


  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/findmyat' element={<Form/>}/>
        <Route path='/learnat' element={<LearnAT/>}/>
        <Route path='/results' element={<Results tech={techResults}/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </main>
  );
};

export default App;

{
  /* <Form onTechParamsSelection={handleTechParamsSelection} /> */
}
