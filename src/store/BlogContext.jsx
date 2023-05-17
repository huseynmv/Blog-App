import {useState, useEffect, createContext} from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
  const [blogs, setblogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await fetch(
      'https://www.lenasoftware.com/api/v1/en/maestro/1',
    );
    const data = await response.json();
    setblogs(data.result);
  };

  return (
    <BlogContext.Provider value={{blogs, fetchBlogs}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
