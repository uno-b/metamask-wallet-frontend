import { useEffect } from 'react';

/*
Alert if clicked on outside of element
*/
export const useOutsideAlerter = (
  ref: React.MutableRefObject<any>,
  onClick: Function
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClick();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};
