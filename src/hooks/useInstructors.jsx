import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch("https://sports-club-server-pi.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);
  return [instructors, loading];
};

export default useInstructors;
