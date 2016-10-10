const config = {
	host: 'http://127.0.0.1',
	port: 8000,
	path:'articles',
}


config.api =`${config.host}:${config.port}/${config.path}`


export default config