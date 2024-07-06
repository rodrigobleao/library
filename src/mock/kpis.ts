import { ItemCardBackgroundColorOptions } from '@/components/molecules/ItemCard/styles';
import { ReactNode } from 'react';

export interface KPIProps {
  id: string;
  title: string;
  description: string;
  footerText?: string;
  content?: ReactNode | null;
  background?: ItemCardBackgroundColorOptions;
  className?: string;
  access?: boolean;
  visuals?: string[];
}

export const items = [
  {
    id: '1',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    access: true,
    visuals: ['1a'],
  },
  {
    id: '2',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    access: true,
    visuals: ['2a', '2b'],
  },
  {
    id: '3',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    access: true,
    visuals: ['3a', '3b'],
  },
  {
    id: '4',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    access: true,
    visuals: ['4a', '4b', '4c', '4d'],
  },
  {
    id: '5',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['5a'],
  },
  {
    id: '6',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['6a'],
  },
  {
    id: '7',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['7a', '7b'],
  },
  {
    id: '8',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['8a', '8b'],
  },
  {
    id: '9',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['9a'],
  },
  {
    id: '10',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['10a', '10b', '10c'],
  },
  {
    id: '10',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    footerText: '06/27/2024',
    visuals: ['11a', '11b'],
  },
];
