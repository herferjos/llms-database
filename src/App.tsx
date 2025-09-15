import React, { useMemo } from 'react';
import { ClusterCard } from './components/ClusterCard';
import { groupByTier } from './lib/groupByTier';
import { mapModelToVendor } from './lib/vendorMap';
import { llms } from './data/llms';

export const App: React.FC = () => {
    const clusters = useMemo(() => groupByTier(llms), []);
    const totalModels = llms.length;

    return (
        <div className="page">
            <header className="header">
                <div className="header-content">
                    <div className="brand">
                        <div className="logo-container">
                            <div className="logo-dot" />
                            <div className="logo-pulse" />
                        </div>
                        <div className="brand-text">
                            <h1>LLMs Database - Dashboard</h1>
                            <p>Explore top AI language models by tier.</p>
                        </div>
                    </div>

                </div>
            </header>
            <main className="content">
                <div className="clusters-grid">
                    {Object.entries(clusters).sort(([a], [b]) => Number(a) - Number(b)).map(([tier, models]) => (
                        <ClusterCard key={tier} tier={tier} models={models.map(m => ({ ...m, vendor: mapModelToVendor(m.name) }))} />
                    ))}
                </div>
            </main>
        </div>
    );
};
