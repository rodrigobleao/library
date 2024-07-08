import { useState } from 'react';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';

interface RequestAccessProps {
  handleCloseModal: () => void;
}

const RequestAccess: React.FC<RequestAccessProps> = ({ handleCloseModal }) => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-between items-center"></div>
        <Typography variant="h2" className="text-3xl mx-auto">
          Request Access
        </Typography>
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
            title="Request"
            variant="contrast"
            onClick={handleCloseModal}
            disabled={message.trim().length === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;
