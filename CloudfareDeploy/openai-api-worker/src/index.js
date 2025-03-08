import OpenAi from 'openai';

export default {
	async fetch(request, env, ctx) {
		const openai = new OpenAi({
			apiKey: env.OPENAI_API_KEY,
		});

		try {
			const chatCompletion = await openai.chat.completions.create({
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'user',
						content: 'What is the capital of the United States?',
					},
				],
				temperature: 0.5,
				presencePenalty: 0.0,
				frequencyPenalty: 0.0,
			});
			const response = chatCompletion.choices[0].message;

			return new Response('JSON.stringify(response)');
		} catch (error) {
			return new Response(error.message, { status: 500 });
		}
	},
};
