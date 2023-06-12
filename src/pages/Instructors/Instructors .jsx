import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://sports-club-server-pi.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="pt-20">
      <h2 className="text-3xl">All the Instructors of <span className="font-bold text-red-600">Sports Club</span>.</h2>
      <div className="overflow-x-auto mt-20">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={instructor._id}>
                <th>{index + 1}</th>
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={instructor.image}
                    alt="Avatar"
                  />
                </div>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
                <td>
                  {instructor.role === "admin" ? (
                    "admin"
                  ) : (
                    <button className="btn btn-ghost bg-purple-600 text-white">
                      See Classes
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
