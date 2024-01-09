import React, { useState } from "react";

function NrdbForm({onNrdbSubmit}) {
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
    // onNrdbSubmit(formData);
    setFormData({
      name: '',
      description: '',
      website: '',
      category: '',
      creator: 3,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default NrdbForm;