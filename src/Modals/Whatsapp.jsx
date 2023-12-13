import React from 'react';
// This is the way to import an SVG file and then pass it as a props
import { ReactComponent as CompanyIcon } from './assets/crown.svg';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const App = () => {
    return (
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="XXXXXXXXXX" />
    );
};