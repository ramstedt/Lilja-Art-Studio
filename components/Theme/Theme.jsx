import { ThemeProvider } from 'styled-components';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "theme"]`)
      .then((data) => {
        setTheme(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
