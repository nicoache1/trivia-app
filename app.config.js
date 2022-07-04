import 'dotenv/config'

export default ({ config }) => ({
  ...config,
  extra: {
    apiHost: process.env.API_HOST,
  },
})
