import { defineConfig } from 'orval'

const isDev = process.env.API_ENV !== 'production'

const BASE_URL = isDev ? 'http://localhost:3000' : 'https://api.fitnow.app'

export default defineConfig({
	fitnow: {
		input: {
			target: `${BASE_URL}/api/swagger-json`
		},
		output: {
			mode: 'tags-split',
			target: './shared/api/generated',
			schemas: './shared/api/model',
			client: 'react-query',
			httpClient: 'axios',
			baseUrl: BASE_URL,
			override: {
				mutator: {
					path: './shared/api/client.ts',
					name: 'customFetch'
				}
			}
		}
	}
})
