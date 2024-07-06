import { LuGrid, LuPackagePlus, LuPieChart } from 'react-icons/lu';
import { TbDeviceAnalytics, TbLink } from 'react-icons/tb';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { CiClock2 } from 'react-icons/ci';
import { BiLockOpen } from 'react-icons/bi';

type IconStyle = 'stroke-thin' | 'stroke-medium';

interface IconConfig {
  icon: IconType;
  style?: IconStyle;
}

export type IconName =
  | 'boxAdd'
  | 'link'
  | 'bookmark'
  | 'bookmark-fill'
  | 'close'
  | 'grid'
  | 'pie-chart'
  | 'search'
  | 'unlock'
  | 'clock'
  | 'create';

const iconsMap: Record<IconName, IconConfig> = {
  boxAdd: { icon: LuPackagePlus, style: 'stroke-medium' },
  link: { icon: TbLink },
  bookmark: { icon: BsBookmark },
  'bookmark-fill': { icon: BsBookmarkFill },
  close: { icon: IoMdClose },
  grid: { icon: LuGrid, style: 'stroke-thin' },
  'pie-chart': { icon: LuPieChart, style: 'stroke-thin' },
  search: { icon: FiSearch },
  unlock: { icon: BiLockOpen },
  clock: { icon: CiClock2 },
  create: { icon: TbDeviceAnalytics },
};

export default iconsMap;
