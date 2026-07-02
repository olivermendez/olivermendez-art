export type IconType = 'briefcase' | 'robot' | 'globe' | 'code' | 'gear' | 'chart' | 'lightning' | 'star' | 'cog' | 'building' | 'terminal' | 'heart' | 'cat' | 'phone' | 'cart' | 'compass' | 'magnifier';

interface PixelIconProps {
  type: IconType;
  size?: number;
  className?: string;
}

const iconPaths: Record<IconType, { viewBox: string; path: string; color?: string }> = {
  briefcase: {
    viewBox: '0 0 16 16',
    path: 'M2 4h12v2H2zm1 3h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zM2 9h12v4H2z',
    color: '#0D9488',
  },
  robot: {
    viewBox: '0 0 16 16',
    path: 'M4 2h8v2H4zm-2 3h12v8H2zm3 3h2v2H5zm4 0h2v2H9z',
    color: '#059669',
  },
  globe: {
    viewBox: '0 0 16 16',
    path: 'M8 1a7 7 0 100 14A7 7 0 008 1zm0 2a5 5 0 110 10A5 5 0 018 3z M1 8h14M8 1c1.5 2 2 4.5 2 7s-.5 5-2 7M8 1C6.5 3 6 5.5 6 8s.5 5 2 7',
    color: '#0F766E',
  },
  code: {
    viewBox: '0 0 16 16',
    path: 'M4 4l-3 4 3 4M12 4l3 4-3 4M7 2l2 12',
    color: '#0D9488',
  },
  gear: {
    viewBox: '0 0 16 16',
    path: 'M8 5a3 3 0 100 6 3 3 0 000-6z M14 7h-1.5A5.5 5.5 0 009 2.5V1H7v1.5A5.5 5.5 0 003.5 7H2v2h1.5A5.5 5.5 0 007 13.5V15h2v-1.5A5.5 5.5 0 0012.5 9H14z',
    color: '#059669',
  },
  chart: {
    viewBox: '0 0 16 16',
    path: 'M2 12h3V6H2zm4.5 0h3V3h-3zm4.5 0h3V8h-3z',
    color: '#0F766E',
  },
  lightning: {
    viewBox: '0 0 16 16',
    path: 'M9 1L3 9h4l-2 6 8-8H9z',
    color: '#0D9488',
  },
  star: {
    viewBox: '0 0 16 16',
    path: 'M8 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z',
    color: '#059669',
  },
  cog: {
    viewBox: '0 0 16 16',
    path: 'M8 5a3 3 0 100 6 3 3 0 000-6zM14 7h-1.5A5.5 5.5 0 009 2.5V1H7v1.5A5.5 5.5 0 003.5 7H2v2h1.5A5.5 5.5 0 007 13.5V15h2v-1.5A5.5 5.5 0 0012.5 9H14z',
    color: '#0D9488',
  },
  building: {
    viewBox: '0 0 16 16',
    path: 'M1 15h14V5l-4-4H5L1 5zm3-4h2v2H4zm4 0h2v2H8zm4 0h2v2h-2z',
    color: '#059669',
  },
  terminal: {
    viewBox: '0 0 16 16',
    path: 'M1 2h14v12H1zm3 3l-2 3 2 3M6 7h5v2H6z',
    color: '#0D9488',
  },
  heart: {
    viewBox: '0 0 16 16',
    path: 'M8 14S1 9.5 1 5.5C1 3 3 1 5.5 1c1.5 0 2.5 1 2.5 1s1-1 2.5-1C13 1 15 3 15 5.5 15 9.5 8 14 8 14z',
    color: '#0D9488',
  },
  cat: {
    viewBox: '0 0 16 16',
    path: 'M4 2L3 5H2v2h1l1 7h8l1-7h1V5h-1l-1-3h-1l1 3H5l1-3z',
    color: '#0F1F17',
  },
  phone: {
    viewBox: '0 0 16 16',
    path: 'M3 1h10v14H3zm2 2h6v8H5zm3 10h2v1H8z',
    color: '#0D9488',
  },
  cart: {
    viewBox: '0 0 16 16',
    path: 'M1 2h2l2 9h7l2-6H5M6 13h1v1H6zm6 0h1v1h-1z',
    color: '#0D9488',
  },
  compass: {
    viewBox: '0 0 16 16',
    path: 'M8 1a7 7 0 100 14A7 7 0 008 1zm0 2a5 5 0 110 10A5 5 0 018 3zm-1 2l4 2-2 1-1 3-1-1-2-1 2-1z',
    color: '#0D9488',
  },
  magnifier: {
    viewBox: '0 0 16 16',
    path: 'M7 2a5 5 0 100 10A5 5 0 007 2zm6 10l-2-2M11 13l3 3',
    color: '#059669',
  },
};

const PixelIcon = ({ type, size = 32, className = '' }: PixelIconProps) => {
  const icon = iconPaths[type];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <path
        d={icon.path}
        fill={icon.color || 'currentColor'}
        stroke={icon.color || 'currentColor'}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PixelIcon;
