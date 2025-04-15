import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Sign Up">
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <button type="button" onClick={onSwitch}>
          Sign In
        </button>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
