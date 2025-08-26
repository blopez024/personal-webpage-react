import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);

    // For now, just show an alert
    alert("Thank you for your message! I'll get back to you soon.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact" id="contact">
      <h2 className="title-section">contact me</h2>
      <form onSubmit={handleSubmit}>
        <div className="email-from">
          <input
            type="text"
            id="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          id="message"
          placeholder="message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">send 📩</button>
      </form>
    </div>
  );
};

export { Contact };
