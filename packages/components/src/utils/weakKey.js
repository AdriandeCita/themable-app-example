const keys = new WeakMap();

const weakKey = obj => {
	if (keys.get(obj)) {
		return keys.get(obj);
	}

	const key = new Date().getTime().toString() + Math.random();
	keys.set(obj, key);

	return key;
};

export default weakKey
