import React from 'react';

const Context = React.createContext({});
const { Consumer, Provider: StylerProvider } = Context;

const Provider = ({ children }) => {
	return <StylerProvider value={{}}>{children}</StylerProvider>;
};

export { Consumer, Context, Provider };
