export function mapModelToVendor(modelName: string): string {
    const name = modelName.toLowerCase();
    if (name.startsWith('gpt') || name.startsWith('o') || name.startsWith('gpt-4o')) return 'openai';
    if (name.startsWith('gemini')) return 'google';
    if (name.startsWith('claude')) return 'anthropic';
    if (name.startsWith('grok')) return 'xai';
    if (name.includes('deepseek')) return 'deepseek';
    return 'ai';
}
