import { useRef, useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = () => {
    onClose();
  };

  if (open)
    return (
      <div className="fixed w-full min-h-screen h/100 top-0 left-0 z-50 flex justify-center items-center bg-black/50">
        <div ref={ref} className="bg-white p-5 shadow-lg rounded-lg">{children}</div>
      </div>
    );
};

export default Modal;
