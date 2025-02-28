import { useState, useContext } from "react";
import { ShippingContext } from "../../context/ShippingContext";
import './ShippingForm.css'; // Assuming you create this CSS file


const destinations = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

const ShippingForm = () => {
  const { addBox } = useContext(ShippingContext);
  const [form, setForm] = useState({ name: "", weight: "", color: "#ffffff", destination: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.weight) {
      setError("All fields are required");
      return;
    }
    if (form.weight <= 0) {
      setError("Weight must be greater than zero");
      return;
    }

    const cost = form.weight * destinations[form.destination];
    addBox({ ...form, cost });
    setForm({ name: "", weight: "", color: "#ffffff", destination: "" });
    setError("");
  };

  return (
    <div className="shipping-form-container">
      <form className="shipping-form" onSubmit={handleSubmit}>
        <h2>Shipping Form</h2>
        {error && <p className="error-message">{error}</p>}
        
        <input 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Receiver Name" 
          className="form-input"
        />
        
        <input 
          name="weight" 
          type="number" 
          value={form.weight} 
          onChange={handleChange} 
          placeholder="Weight (kg)" 
          className="form-input"
        />
        
        <input 
          name="color" 
          type="color" 
          value={form.color} 
          onChange={handleChange} 
          className="form-input-color"
        />
        
        <select name="destination" value={form.destination} onChange={handleChange} className="form-input-color">
          {Object.keys(destinations).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <button type="submit" className="submit-button">Add Box</button>
      </form>
    </div>
  );
};

export default ShippingForm;