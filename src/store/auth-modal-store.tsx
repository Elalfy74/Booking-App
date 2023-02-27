import create from 'zustand';

export enum ModalContent {
  LOGIN,
  SIGNUP,
  PASSWORD_RECOVERY,
}

type AuthModalState = {
  modalContent: ModalContent;
  changeContent: (newContent: ModalContent) => void;
};

export const useAuthModal = create<AuthModalState>((set) => ({
  modalContent: ModalContent.LOGIN,
  changeContent: (newContent: ModalContent) =>
    set(() => ({ modalContent: newContent })),
}));
