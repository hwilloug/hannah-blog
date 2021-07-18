import axios from 'axios'

export default () => {
	return axios.create({
		baseURL: process.env.VUE_APP_ROOT_API || 'http://localhost:3000/api'
	})
}
