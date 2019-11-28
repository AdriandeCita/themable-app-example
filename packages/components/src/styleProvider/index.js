import lodash from 'lodash';

const extractStyle = (theme, schema = []) => {
	if (schema.length) {
		return schema.reduce((acc, path) => {
			Object.assign(acc, lodash.get(theme, path, {}));
			return acc;
		}, {});
	}
	return {};
};

export default extractStyle;
