module.exports =[
	{
		register: require('hapi-marko'),
		options: {templatesDir: __dirname + '/templates/'}
	},
	{
		register: require('inert')
	}
];
