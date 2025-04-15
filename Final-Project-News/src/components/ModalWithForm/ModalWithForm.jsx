import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
