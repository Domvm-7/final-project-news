import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Sign In">
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not registered?{" "}
        <button type="button" onClick={onSwitch}>
          Sign Up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
