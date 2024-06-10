
import React, { useState } from 'react';

export function StudentForm({ addStudent,students }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Name is required';
        } else if (name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        } else if (students.some(student => student.name === name)) {
            newErrors.name = 'Name must be unique';
        }

        if (!age) {
            newErrors.age = 'Age is required';
        } else if (isNaN(age)) {
            newErrors.age = 'Age must be a number';
        } else if (age <= 18) {
            newErrors.age = 'Age must be greater than 18';
        }

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            addStudent({ name, age });
            setName('');
            setAge('');
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };



    return (
        <div class="col-lg-6 p-4">
            <input
                type="text"
                name="studentname"
                className="form-control mb-4 mt-4"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}

            <input
                type="text"
                name="studentage"
                className="form-control mb-4 mt-4"
                placeholder="Student Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            {errors.age && <div className="text-danger">{errors.age}</div>}

            <button className="btn btn-primary mt-3 mb-3" onClick={handleSubmit}>
                Add Student
            </button>
        </div>
    );
}