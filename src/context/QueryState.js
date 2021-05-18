import React, { useState, useMemo } from 'react';
import QueryContext from './query-context';

const QueryState = (props) => {
	const [ query, setQuery ] = useState('');
	const value = useMemo(() => ({ query, setQuery }), [ query, setQuery ]);

	return <QueryContext.Provider value={value}>{props.children}</QueryContext.Provider>;
};

export default QueryState;
