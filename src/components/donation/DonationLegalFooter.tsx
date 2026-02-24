import React from 'react';

const DonationLegalFooter: React.FC = () => {
  return (
    <p className="text-xs text-black text-center">
      By paying, you agree to Link's <span className="underline">Terms</span> and{' '}
      <span className="underline">Privacy</span>.<br />
      Powered by <span className="font-extrabold">stripe</span>
    </p>
  );
};

export default DonationLegalFooter;
