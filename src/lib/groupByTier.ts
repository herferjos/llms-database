import type { LlmEntry } from '../types';

export function groupByTier(entries: LlmEntry[]): Record<string, LlmEntry[]> {
    const byTier: Record<string, LlmEntry[]> = {};
    for (const entry of entries) {
        const key = entry.tier;
        if (!byTier[key]) byTier[key] = [];
        byTier[key].push(entry);
    }
    return byTier;
}
