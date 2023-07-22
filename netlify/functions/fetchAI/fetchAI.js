import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
})

const openai = new OpenAIApi(configuration)

const handler = async (event) => {
  try {
    const response = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        messages: event.body,
        presence_penalty: 0,
        frequency_penalty: 0.3,
        max_tokens: 4000,
        temperature: 0,
        stop: ['\n', '->']
    })
    return {
        statusCode: 200,
        body: JSON.stringify({response}),
    }
} catch (error) {
    return { statusCode: 500, body: error.toString() }
}
}

module.exports = { handler }
