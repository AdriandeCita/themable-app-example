const pathFrom = (...args) => {
	return args.filter(Boolean).join('.');
};

export default pathFrom;
