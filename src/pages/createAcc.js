import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './firebase'; // Import the Firebase database instance

function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    surname: '',
    age: '',
    gender: '',
    email: '',
    education: '',
    job: '',
    caste: '',
    subcaste: '',
    mother: '',
    father: '',
    fatherOccupation: '',
    motherOccupation: '',
    siblings: '',
    hobbies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store the user data in Firebase
      await db.collection('users').add(formData);
      alert('User data saved successfully!');
      // Reset the form after submission
      setFormData({
        username: '',
        surname: '',
        age: '',
        gender: '',
        email: '',
        education: '',
        job: '',
        caste: '',
        subcaste: '',
        mother: '',
        father: '',
        fatherOccupation: '',
        motherOccupation: '',
        siblings: '',
        hobbies: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred while saving user data.');
    }
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Register Your Profile</h2>
            <form onSubmit={handleSubmit}>
              {/* Add input fields for each user attribute */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="surname" className="form-label">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="education" className="form-label">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="job" className="form-label">Job</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job"
                    name="job"
                    value={formData.job}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="caste" className="form-label">Caste</label>
                  <input
                    type="text"
                    className="form-control"
                    id="caste"
                    name="caste"
                    value={formData.caste}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="subcaste" className="form-label">Subcaste</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subcaste"
                    name="subcaste"
                    value={formData.subcaste}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="mother" className="form-label">Mother's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mother"
                    name="mother"
                    value={formData.mother}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="father" className="form-label">Father's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="father"
                    name="father"
                    value={formData.father}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="motherOccupation" className="form-label">Mother's Occupation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="motherOccupation"
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="fatherOccupation" className="form-label">Father's Occupation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fatherOccupation"
                    name="fatherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Save User</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
