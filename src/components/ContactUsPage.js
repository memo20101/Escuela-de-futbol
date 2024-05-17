import React, { useState } from 'react';
import '../styles/contact-us-page.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthdate: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const persona = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      birthdate: formData.birthdate
    };
   console.log(persona);
    // Enviar los datos a la API de Google Apps Script
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzS769RYjyKNUu6yn12hbpxCgYf6Z_5ZH9MB-VYZvE/dev?access_token=ya29.a0AfB_byCqSVazYhu7ovRxNiTAxHrshN0YLg-QQpEnPr7F7mE6-fvPYxZMmnI3fWHONA9Tzz6uM6vxvOTsczJWAavJmIIbGRf0-m1oHuPPhbK2CtjZ-6RqBcIY6QdVdPe1SvjF0VdFOA0oNqrkNkebFkQP6o_aqEtS35EaCgYKATMSARESFQHGX2MinNilG22TJjDvNlyphbXH7g0170', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(persona),
        mode: 'no-cors'   
      });
      if (!response.ok) {
        throw new Error('La solicitud no se completó correctamente: ' + response.status);
      }
      const responseData = await response.json();
      console.log(responseData); // Puedes manejar la respuesta de la API aquí
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contactanos</h1>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Tu nombre..." 
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="phone">Teléfono:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Tu teléfono..." 
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="email">Correo electrónico:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Tu correo electrónico..." 
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="birthdate">Fecha de nacimiento:</label>
          <input 
            type="date" 
            id="birthdate" 
            name="birthdate" 
            value={formData.birthdate}
            onChange={handleChange}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;

