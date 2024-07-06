import { useState } from 'react';
import ModalBase from '../../organisms/ModalBase';
import { KPIProps } from '@/mock/kpis';
import Button from '@/components/atoms/Button';
import EdgeContainer from '@/components/molecules/EdgeContainer';
import IconButton from '@/components/atoms/IconButton';
import Typography from '@/components/atoms/Typography';

type KPIModalProps = {
  item?: KPIProps;
  isOpen: boolean;
  setIsOpen: () => void;
  className: string;
};

const charts = [
  { id: '1', name: 'Chart 1' },
  { id: '2', name: 'Chart 2' },
  { id: '3', name: 'Chart 3' },
];

const AttachToLayoutModal: React.FC<KPIModalProps> = ({
  item,
  isOpen,
  setIsOpen,
  className,
}) => {
  const [selectedChart, setSelectedChart] = useState<
    { id: string; name: string }[]
  >([]);

  if (!item) return null;

  return (
    <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} className={className}>
      <EdgeContainer>
        <IconButton name="close" color="black" onClick={setIsOpen} />
      </EdgeContainer>
      <div className="flex flex-col items-start gap-4 relative">
        <div className="w-full flex justify-between items-center">
          <Typography variant="h2" className="text-3xl mx-auto">
            Attach to Layout
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="strong">Select charts to attach:</Typography>
          <div className="flex flex-wrap gap-2 mt-2">
            {charts.map((chart) => (
              <label key={chart.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={chart.id}
                  checked={selectedChart.some((c) => c.id === chart.id)}
                  onChange={(e) => {
                    const chartId = e.target.value;
                    setSelectedChart((prevSelected) =>
                      prevSelected.some((c) => c.id === chartId)
                        ? prevSelected.filter((c) => c.id !== chartId)
                        : [...prevSelected, chart]
                    );
                  }}
                />
                <span>{chart.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end gap-4">
          <Button
            title={'Attach to existing Layout'}
            variant="opt-1"
            disabled={selectedChart.length === 0}
          />
          <Button
            title={'Create new layout'}
            variant="contrast"
            disabled={selectedChart.length === 0}
          />
        </div>
      </div>
    </ModalBase>
  );
};

export default AttachToLayoutModal;
