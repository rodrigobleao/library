import Typography from '@/components/atoms/Typography';
import ItemsCardList from '@/components/organisms/ItemsCardList';
import { KPIProps } from '@/mock/kpis';

interface AssetOverviewProps {
  items: KPIProps[];
  itemAction: (id: string) => void;
}

const AssetOverview: React.FC<AssetOverviewProps> = ({ items, itemAction }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-between items-center"></div>
        <Typography variant="h2" className="text-3xl mx-auto">
          Asset Overview
        </Typography>
        <ItemsCardList items={items} itemAction={itemAction} />
      </div>
    </div>
  );
};

export default AssetOverview;
