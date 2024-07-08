import { useState } from 'react';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { Kpi } from '@/mock/data';

type AttachToLayoutProps = {
  item?: Kpi;
  close: () => void;
};

const AttachToLayout: React.FC<AttachToLayoutProps> = ({ item, close }) => {
  const [selectedChart, setSelectedChart] = useState<string[]>([]);

  if (!item) return null;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <Typography variant="h2" className="text-3xl mx-auto">
            Attach to Layout
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="strong">Select charts to attach:</Typography>
          <div className="flex flex-wrap gap-2 mt-2">
            {item?.visuals.map((visual) => (
              <label key={visual} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={visual}
                  checked={selectedChart.some((c) => c === visual)}
                  onChange={(e) => {
                    const chartId = e.target.value;
                    setSelectedChart((prevSelected) =>
                      prevSelected.some((c) => c === chartId)
                        ? prevSelected.filter((c) => c !== chartId)
                        : [...prevSelected, visual]
                    );
                  }}
                />
                <span>{visual}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end gap-4">
          <Button
            title={'Attach to existing Layout'}
            variant="opt-1"
            disabled={selectedChart.length === 0}
            onClick={close}
          />
          <Button
            title={'Create new layout'}
            variant="contrast"
            disabled={selectedChart.length === 0}
            onClick={close}
          />
        </div>
      </div>
    </div>
  );
};

export default AttachToLayout;
