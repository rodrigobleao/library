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

const RequestAccessModal: React.FC<KPIModalProps> = ({
  item,
  isOpen,
  setIsOpen,
  className,
}) => {
  const [message, setMessage] = useState('');

  if (!item) return null;

  return (
    <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} className={className}>
      <EdgeContainer>
        <IconButton name="close" color="black" onClick={setIsOpen} />
      </EdgeContainer>
      <div className="flex flex-col items-start gap-4 relative">
        <div className="w-full flex justify-between items-center">
          <Typography variant="h2" className="text-3xl mx-auto">
            Request Access
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="strong">Enter your request message:</Typography>
          <textarea
            className="w-full mt-2 p-2 border border-black border-opacity-50 rounded-md"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-end gap-4 mt-4">
          <Button
            title={'Request'}
            variant="contrast"
            onClick={() => {}}
            disabled={message.trim().length === 0}
          />
        </div>
      </div>
    </ModalBase>
  );
};

export default RequestAccessModal;
