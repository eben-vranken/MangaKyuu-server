import { Request, Response } from 'express';
import { getTranslation } from '../services/agentService';

const getTranslationFromSentence = async (req: Request, res: Response): Promise<void> => {
    const { sentenceToBeTranslated, organizationId, apiKey } = req.body;

    // Ensure the types match the expected types
    const content = await getTranslation(
        sentenceToBeTranslated as string,
        organizationId as string,
        apiKey as string
    );

    res.status(200).json({ content });
};

// Export all methods
module.exports = {
    getTranslationFromSentence
};