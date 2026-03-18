import { getSavings } from '../data/image-savings';

export default function SavingsBadge({ file }) {
  const savings = getSavings(file);
  if (!savings) return null;
  return (
    <div className="savings-badge">
      <span className="savings-percent">{savings.percent}% smaller</span>
      <span className="savings-detail">{savings.original} → {savings.cdn}</span>
    </div>
  );
}

export function LegacyBadge({ file }) {
  const savings = getSavings(file);
  if (!savings) return null;
  return (
    <div className="legacy-badge">
      <span className="legacy-size">{savings.original}</span>
    </div>
  );
}
