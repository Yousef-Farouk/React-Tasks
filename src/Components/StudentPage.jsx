
import { StudentForm } from "./StudentFrom";
import { StudentTable } from "./StudentTable";
import React, { useState } from 'react';



export function StudentPage() {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, { id: students.length + 1, ...student }]);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };


    return (
        <div className="container">
            <div className="row">
                <StudentForm addStudent={addStudent} students={students} />
                <StudentTable students={students} deleteStudent={deleteStudent} />
            </div>
        </div>
        
    );
}