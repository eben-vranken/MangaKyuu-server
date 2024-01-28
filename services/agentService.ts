import { OpenAI } from 'openai';
import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources';

/// API CALLS ///
async function getTranslation(sentenceToBeTranslated: string, organizationId: string, apiKey: string): Promise<string> {
    const openai = new OpenAI({ organization: organizationId, apiKey: apiKey });

    const response = await openai
        .chat
        .completions
        .create(translateSentence(sentenceToBeTranslated));
    const content = response.choices[0].message.content;

    if (!content) throw new Error('Unable to fetch extracts');
    return content;
}

const model: string = "gpt-3.5-turbo-1106";
const jsonFormat: string = `{"sentence":"","sentence_meaning":"","word_breakdown":[],"furigana":null,"grammar_rules":[]}`;

function translateSentence(sentenceToBeTranslated: string): ChatCompletionCreateParamsNonStreaming {
    return {
        model: model,
        messages: [
            {
                role: "system",
                content: `You're an expert in structuring information about Japanese sentences or phrases. Your task is to create a JSON object for each given Japanese sentence, including key details such as the breakdown of words, grammar rules, and overall meanings. Additionally, when applicable, provide the representation of words in both kana and kanji. Ensure that the JSON format follows the pattern: ${jsonFormat}. Remember to include any additional context or notes relevant to the sentence. Each response should be clear and concise, offering valuable insights into the linguistic components and structure of the given Japanese input.`
            },
            {
                role: "user",
                content: `Provided is the sentence to be translated: ${sentenceToBeTranslated}`
            }
        ],
    };
}

export { getTranslation };