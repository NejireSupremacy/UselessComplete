const messageCreateE = (message) => {
	const regex = /\b(qu[eé])\W*$/i;
	if (!regex.test(message.content)) return;

	message.reply({
		content: 'so',
		messageReference: {
			messageId: message.id,
		},
	}).catch();
};

export { messageCreateE };