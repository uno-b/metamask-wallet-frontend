import { useRef } from 'react';

import { useOutsideAlerter } from '../../utils/hooks';

type OverlayProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
};

const Overlay = ({
  children,
  isOpen = true,
  setIsOpen = () => {},
}: OverlayProps) => {
  /* Hide overlay when clicked outside */
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));

  return (
    <div
      className={`fixed z-50 inset-0 bg-black/70 flex justify-center items-center transition-all`}
      style={{
        opacity: isOpen ? '1' : '0',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </div>
  );
};

export default Overlay;
