import "./ModalWithForm.css";

function ModalWithForm({ children }) {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default ModalWithForm;
