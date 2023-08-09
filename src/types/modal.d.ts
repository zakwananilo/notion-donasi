interface ModalProps {
  show?: boolean;
  success?: boolean;
  title?: string;
  message?: string;
  setModalProps?: Dispatch<SetStateAction<ModalProps | undefined>>
}