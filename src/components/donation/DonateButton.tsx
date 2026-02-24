import React from 'react';

interface DonateButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({
  onClick,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-full bg-red-700 text-white text-2xl font-bold py-5 rounded-2xl hover:bg-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Processing...' : 'Donate'}
    </button>
  );
};

export default DonateButton;
