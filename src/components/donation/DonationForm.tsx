import React from 'react';
import DonationAmountSelector from './DonationAmountSelector';
import DonationAmountValue from './DonationAmountValue';
import DonateButton from './DonateButton';
import DonationLegalFooter from './DonationLegalFooter';

interface DonationFormProps {
  amounts: number[];
  selectedAmount: number | null;
  onAmountSelect: (amount: number) => void;
  onDonate?: () => void;
  isLoading?: boolean;
}

const DonationForm: React.FC<DonationFormProps> = ({
  amounts,
  selectedAmount,
  onAmountSelect,
  onDonate,
  isLoading = false,
}) => {
  return (
    <div className="w-96 bg-white rounded-tr-2xl rounded-bl-2xl shadow-xl p-8 border-8 border-amber-400">
      <div className="space-y-6">
        {/* Amount Selector */}
        <DonationAmountSelector
          amounts={amounts}
          selectedAmount={selectedAmount}
          onAmountSelect={onAmountSelect}
        />

        {/* Amount Display */}
        <DonationAmountValue amount={selectedAmount} currency="USD" />

        {/* Donate Button */}
        <DonateButton onClick={onDonate} isLoading={isLoading} />

        {/* Footer Text */}
        <DonationLegalFooter />
      </div>
    </div>
  );
};

export default DonationForm;
