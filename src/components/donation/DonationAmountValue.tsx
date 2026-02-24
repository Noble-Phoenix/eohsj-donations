import React from 'react';

interface DonationAmountDisplayProps {
  amount: number | null;
  currency?: string;
}

const DonationAmountValue: React.FC<DonationAmountDisplayProps> = ({
  amount,
  currency = 'USD',
}) => {
  return (
    <div className="border-2 border-red-900 rounded-2xl p-4 flex items-center justify-between bg-white">
      <span className="text-4xl font-medium text-gray-900">{amount}</span>
      <span className="text-xl font-medium text-gray-900">{currency}</span>
    </div>
  );
};

export default DonationAmountValue;
