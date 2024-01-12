import React, { useState } from "react";
import './../CommentForm.css';

// http://localhost:3005


function NrdbForm({onNrdbSubmit}) {


  const fetchFormData = (submittedData) => {
    return new Promise((resolve, reject)=>{
      const options = {
        method: 'POST',
        body: JSON.stringify(submittedData),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      fetch('http://localhost:3005/techs', options)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response is bad")
          }
          return response.JSON
        })
        .then(data => {
          console.log(data)
          setSuccess('Yeah you did it')
          resolve()
        })
        .catch(error => {
          setSuccess('oops')
          console.error(error)
          reject(error)
        });
    })
  };

  const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    category: '',
    creator: 3,
  });
  
  const handleSubmit = (e) => {
    console.log("I am here")
    e.preventDefault();
    console.log('Form submitted:', formData);
    const submittedData = {
      name: formData.name,
      description: formData.description,
      website: formData.website,
      category: formData.category,
      creator: formData.creator,
    };
    console.log("test");

    
    fetchFormData(submittedData)
    
    setFormData({
      name: '',
      description: '',
      website: '',
      category: '',
      creator: 3,
    });

   }
  ;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return(
    <div className='Comment-form'>
      <form className='comment-form-content' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Website:
          <input type="text" name="website" value={formData.website} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="integer" name="category" value={formData.category} onChange={handleChange} />
        </label>
        <label>
          Creator
          <input type="integer" name="description" value={formData.creator} readOnly />
        </label>
        <button type="submit">Submit</button>
      <p>{success}</p>
      </form>
    </div>
  );
}

export default NrdbForm;