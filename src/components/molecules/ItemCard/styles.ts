export const itemCardBackgroundVariant = {
  white: 'bg-white border-2 border-accent',
  accent: 'bg-accent',
  transparent: 'bg-transparent',
};

export type ItemCardBackgroundColorOptions =
  keyof typeof itemCardBackgroundVariant;
