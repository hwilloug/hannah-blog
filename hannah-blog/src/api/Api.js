import axios from 'axios'

let url
if (process.env.NODE_ENV == "development") {
	url = "http://localhost:8080/api"
} else {
	url = "https://y014mdl7zl.execute-api.us-east-2.amazonaws.com/testing"
}

export default () => {
	return axios.create({
		baseURL: url
	})
}
