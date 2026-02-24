import React from 'react';
import DonationAmountButton from './DonationAmountButton';

interface DonationAmountSelectorProps {
  amounts: number[];
  selectedAmount: number | null;
  onAmountSelect: (amount: number) => void;
}

const DonationAmountSelector: React.FC<DonationAmountSelectorProps> = ({
  amounts,
  selectedAmount,
  onAmountSelect,
}) => {
  const midpoint = Math.ceil(amounts.length / 2);
  const firstRow = amounts.slice(0, midpoint);
  const secondRow = amounts.slice(midpoint);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        {firstRow.map((amount) => (
          <DonationAmountButton
            key={amount}
            amount={amount}
            isSelected={selectedAmount === amount}
            onClick={() => onAmountSelect(amount)}
          />
        ))}
      </div>
      {secondRow.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {secondRow.map((amount) => (
            <DonationAmountButton
              key={amount}
              amount={amount}
              isSelected={selectedAmount === amount}
              onClick={() => onAmountSelect(amount)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationAmountSelector;
