import { useState } from 'react';
import IconButton from '@/components/atoms/IconButton';
import EdgeContainer from '@/components/molecules/EdgeContainer';
import ModalBase from '@/components/organisms/ModalBase';
import AttachToLayout from '@/components/templates/AttachToLayout';
import KPIData from '@/components/templates/KPIData';
import RequestAccess from '@/components/templates/RequestAccess';
import AssetOverview from '@/components/templates/AssetOverview';
import { Asset } from '@/mock/data';

type AssetsModalProps = {
  asset?: Asset;
  isOpen: boolean;
  setIsOpen: () => void;
};

enum AssetsModalSteps {
  ASSET = 'asset',
  KPI = 'kpi',
  REQUEST_ACCESS = 'request_access',
  ATTACH_DATA = 'attach_data',
  SHARE_LINK = 'share_link',
}

const AssetsModal: React.FC<AssetsModalProps> = ({
  asset,
  isOpen,
  setIsOpen,
}) => {
  const [modalStep, setModalStep] = useState(AssetsModalSteps.ASSET);
  const [selectedItemId, setSelectedItemId] = useState<string>();

  if (!asset) return null;

  const selectedKPI = asset.kpis.find((item) => item.id === selectedItemId);

  const hasNoAccessInKPI =
    selectedKPI && !selectedKPI.access && modalStep === AssetsModalSteps.KPI;

  const isInsideKPI = modalStep !== AssetsModalSteps.ASSET;

  const isRequestingAccess = modalStep === AssetsModalSteps.REQUEST_ACCESS;

  const handleCloseModal = () => {
    setModalStep(AssetsModalSteps.ASSET);
    setIsOpen();
  };

  const handleActionButton = () => {
    setModalStep(
      selectedKPI?.access
        ? AssetsModalSteps.ATTACH_DATA
        : AssetsModalSteps.REQUEST_ACCESS
    );
  };

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
    setModalStep(AssetsModalSteps.KPI);
  };

  const goBack = () => {
    if (modalStep === AssetsModalSteps.KPI) {
      setModalStep(AssetsModalSteps.ASSET);
    } else {
      setModalStep(AssetsModalSteps.KPI);
    }
  };

  return (
    <ModalBase isOpen={isOpen} setIsOpen={handleCloseModal}>
      <EdgeContainer variant="top-right" className="z-50">
        <div
          className={`flex gap-1 rounded-lg ${
            hasNoAccessInKPI && 'bg-accent p-1'
          }`}
        >
          {isInsideKPI && (
            <>
              {!isRequestingAccess && (
                <IconButton
                  name={selectedKPI?.access ? 'create' : 'unlock'}
                  color="black"
                  onClick={handleActionButton}
                />
              )}
              <IconButton name="link" color="black" />
            </>
          )}

          <IconButton name="close" color="black" onClick={handleCloseModal} />
        </div>
      </EdgeContainer>

      <EdgeContainer variant="top-left" className="z-50">
        <div
          className={`flex gap-1 rounded-lg ${
            hasNoAccessInKPI && 'bg-accent p-1'
          }`}
        >
          {modalStep !== AssetsModalSteps.ASSET && (
            <IconButton name="arrow-back" onClick={goBack} color="black" />
          )}
        </div>
      </EdgeContainer>
      {hasNoAccessInKPI && (
        <div className="absolute inset-0 z-40 bg-black opacity-50 rounded-lg" />
      )}
      {modalStep === AssetsModalSteps.ASSET && (
        <AssetOverview items={asset.kpis} itemAction={handleItemClick} />
      )}
      {modalStep === AssetsModalSteps.KPI && <KPIData item={selectedKPI} />}
      {modalStep === AssetsModalSteps.ATTACH_DATA && (
        <AttachToLayout item={selectedKPI} close={() => handleCloseModal()} />
      )}
      {modalStep === AssetsModalSteps.REQUEST_ACCESS && (
        <RequestAccess handleCloseModal={handleCloseModal} />
      )}
    </ModalBase>
  );
};

export default AssetsModal;
