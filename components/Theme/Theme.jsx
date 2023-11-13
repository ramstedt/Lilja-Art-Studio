import {ThemeProvider} from 'styled-components';
import { client } from '@/sanity/lib/client'
import { useState, useEffect } from 'react';

const Theme = ({children}) => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        client
          .fetch(`*[_type == "theme"]{primary, secondary}`)
          .then((data) => {
            setTheme(data[0]);
          });
      }, []);
    
console.log(theme)
if (!theme) return <div>Loading...</div>;
return (
    <ThemeProvider theme={theme}>
      <div>Welcome to the Home page!</div>
      {children}
    </ThemeProvider>
)



}

export default Theme