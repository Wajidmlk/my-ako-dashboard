import React from 'react';
import '../styles/SummaryCard.scss';

interface SummaryCardProps {
  title: string;
  value: number | string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value }) => {
  return (
    <div className="summary-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default SummaryCard;
