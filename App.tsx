/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import LandingPage from './components/LandingPage';
import InquiryForm from './components/InquiryForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <InquiryForm />
    </div>
  );
};

export default App;

