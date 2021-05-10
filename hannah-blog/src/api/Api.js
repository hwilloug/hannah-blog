import axios from 'axios'

export default () => {
	return axios.create({
		baseURL: "https://y014mdl7zl.execute-api.us-east-2.amazonaws.com/testing"
	})
}
