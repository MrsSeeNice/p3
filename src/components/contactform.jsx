const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  import React from 'react';

function contactform() {
  return <h1>About Us</h1>;
}

export default contactform;
