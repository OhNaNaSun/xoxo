import 'react';
interface TooltipProps {
  title: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}
const Tooltip: React.FC<TooltipProps> = ({ title, position }) => {
  return (
    <div className="tooltip">
      hover on me
      <span className="tooltiptext">{title}</span>
    </div>
  );
};
export default Tooltip;
