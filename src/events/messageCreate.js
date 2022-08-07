const messageCreateE = (message) => {
	const regex = /(qu[eé])\W*$/i;
	if (!regex.test(message.content)) return;

	message.reply({
		content: 'so',
		messageReference: {
			messageId: message.id,
			failIfNotExists: true
		},
	});
};

export { messageCreateE };