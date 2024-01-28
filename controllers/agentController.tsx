const agentService = require('../services/agentService')

const getTranslationFromSentence = async (req, res) => {
    const { sentenceToBeTranslated } = req.body
    const content = await agentService.getInformation((sentenceToBeTranslated));

    res
        .status(200)
        .json({ content: content })
}

// Export all methods
module.exports = {
    getTranslationFromSentence
};