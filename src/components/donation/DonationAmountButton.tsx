import React from 'react';

interface DonationAmountButtonProps {
  amount: number;
  isSelected: boolean;
  onClick: () => void;
}

const DonationAmountButton: React.FC<DonationAmountButtonProps> = ({
  amount,
  isSelected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
      isSelected
        ? 'bg-red-700 text-white border-2 border-red-700'
        : 'bg-white text-gray-800 border-2 border-red-200'
    }`}
  >
    ${amount}
  </button>
);

export default DonationAmountButton;
