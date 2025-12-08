/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <LandingPage />
            <Analytics />
        </div>
    );
};

export default App;
