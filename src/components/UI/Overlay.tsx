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
  return (
    <div
      className={`fixed z-50 inset-0 bg-black/70 flex justify-center items-center transition-all`}
      style={{
        opacity: isOpen ? '1' : '0',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Overlay;
