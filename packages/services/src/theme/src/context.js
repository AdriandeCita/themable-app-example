import React from 'react';

const ThemeContext = React.createContext({
    theme: {},
    set: () => {},
});

export default ThemeContext;
