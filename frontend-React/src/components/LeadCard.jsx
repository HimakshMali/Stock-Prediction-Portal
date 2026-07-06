import React, { useState, useEffect } from 'react';

const LeadCard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states for adding a new lead
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: ''
  });

  // Helper function to get your JWT token (assuming you store it in localStorage on login)
  const getAuthHeaders = () => {
    const token = localStorage.getItem('access_token'); 
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // 🔒 This is what unlocks your Django view
    };
  };

  // 1. Fetch All Leads
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/api/v1/leads/', {
        method: 'GET',
        headers: getAuthHeaders()
      });
      
      if (response.status === 401 || response.status === 403) {
        throw new Error("Unauthorized! Please log in first.");
      }
      if (!response.ok) throw new Error("Failed to fetch leads.");

      const data = await response.json();
      setLeads(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Add (POST) a New Lead
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddLead = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/leads/', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to create lead. Make sure email is unique.");

      const newLead = await response.json();
      setLeads([...leads, newLead]); // Append new lead to the UI list smoothly
      setFormData({ first_name: '', last_name: '', email: '', phone_number: '' }); // Reset form
      alert("Lead added securely!");
    } catch (err) {
      alert(err.message);
    }
  };

  // 3. Delete a Lead by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/leads/${id}/`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (response.status === 204) {
        setLeads(leads.filter(lead => lead.id !== id)); // Remove from UI status
      } else {
        alert("Could not delete lead.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div style={styles.container}>
      {/* ADD LEAD FORM */}
      <div style={styles.box}>
        <h3 style={styles.title}>Securely Add New Lead</h3>
        <form onSubmit={handleAddLead} style={styles.form}>
          <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleInputChange} required style={styles.input} />
          <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleInputChange} required style={styles.input} />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required style={styles.input} />
          <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleInputChange} style={styles.input} />
          <button type="submit" style={styles.submitBtn}>Save Lead</button>
        </form>
      </div>

      {/* LEADS LIST UI */}
      <div style={styles.box}>
        <h3 style={styles.title}>Current Active Leads</h3>
        {loading && <p>Loading secure data...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && leads.length === 0 && <p>No leads found in database.</p>}
        
        {leads.map(lead => (
          <div key={lead.id} style={styles.leadCard}>
            <div>
              <strong>{lead.first_name} {lead.last_name}</strong>
              <div style={styles.subText}>{lead.email} | {lead.phone_number || 'No Phone'}</div>
            </div>
            <button onClick={() => handleDelete(lead.id)} style={styles.deleteBtn}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '600px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 10px' },
  box: { backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  title: { margin: '0 0 15px 0', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '10px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' },
  submitBtn: { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
  leadCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #f0f0f0' },
  subText: { fontSize: '12px', color: '#666', marginTop: '4px' },
  deleteBtn: { padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }
};

export default LeadCard;