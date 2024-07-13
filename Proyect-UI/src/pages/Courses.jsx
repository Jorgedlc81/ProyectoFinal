import { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4500/api/courses')
      .then(response => {
        console.log(response.data); // Para verificar los datos recibidos
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div>
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Courses</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className="course-card bg-white shadow-md rounded-lg p-6 m-4 hover:bg-gray-100">
            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-black text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Courses;
