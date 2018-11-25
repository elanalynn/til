const jwtDecoder = token => JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/')))

export default jwtDecoder
