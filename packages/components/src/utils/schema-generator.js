const getSchemaGenerator = defaultPath => (...paths) =>
	paths.includes(defaultPath)
		? paths.filter(Boolean)
		: [defaultPath, ...paths.filter(Boolean)];

export default getSchemaGenerator;
