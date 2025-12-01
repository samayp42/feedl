/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './components/LandingPage';
import InquiryForm from './components/InquiryForm';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
    return (
        <div className="min-h-screen cursor-none">
            <CustomCursor />
            <LandingPage />
            <InquiryForm />
            <Analytics />
        </div>
    );
};

export default App;

