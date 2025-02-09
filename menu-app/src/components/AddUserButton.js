import React, { useState } from 'react';
import { db } from './firebase'; // Import the Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Correct Firestore functions

const AddUserButton = () => {
  const [formData, setFormData] = useState({
    food: 'meat',
    rating: 5,
    comments: 'it was so good'
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Add data to Firestore
      console.log(db)
      await addDoc(collection(db, "ratings"), formData);
      console.log('Data added successfully!');
      // Reset form or handle success
    } catch (error) {
      console.error('Error adding data: ', error);
      // Handle error
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="food"
          name="food"
          value={formData.food}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <input
          type="text"
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserButton;
