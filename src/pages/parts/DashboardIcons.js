import React from 'react';
import VisaIcon from '../../images/Visa';
import MastercardIcon from '../../images/Mastercard';
import DiscoverIcon from '../../images/Discover';
import AmexIcon from '../../images/Amex';
import StripeIcon from '../../images/Stripe';

/**
 * Returns the corresponding icon component for a given card type.
 * @param {string} cardType - The type of the card (e.g., 'visa', 'mastercard').
 * @returns {JSX.Element} - The card icon component.
 */
const getCardIcon = (cardType) => {
  const iconProps = { sx: { fontSize: '8rem' } };
  switch (cardType) {
    case 'visa':
      return <VisaIcon {...iconProps} />;
    case 'mastercard':
      return <MastercardIcon {...iconProps} />;
    case 'discover':
      return <DiscoverIcon {...iconProps} />;
    case 'amex':
      return <AmexIcon {...iconProps} />;
    default:
      return <StripeIcon {...iconProps} />;
  }
};

export default getCardIcon;

