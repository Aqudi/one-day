export { requestLogger, responseLogger }

// Request logger
function requestLogger(request) {
  console.log('Starting Request', request.url, request)
  return request
}

// Reponse logger
function responseLogger(response) {
  console.log('Response:', response.config.url, response)
  return response
}
