import {useState, useEffect, createContext} from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
  const [blogs, setblogs] = useState([]);
  // const [page, setpage] = useState(1);

  const fetchBlogs = async page => {
    // const response = await fetch(
    //   `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=10`,
    // );
    // const data = await response.json();
    // setblogs(data.result);
    fetch(
      `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=15`,
    )
      .then(res => res.json())
      .then(data => {
        setblogs([...blogs, ...data.result]);
      })
      .catch(err => {
        console.log('Fetch err', err);
      });
  };

  return (
    <BlogContext.Provider value={{blogs, fetchBlogs, setblogs}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
