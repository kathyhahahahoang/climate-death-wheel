import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type InfoState = {
  title: string;
  text: string;
  longText: string;
  image: string;
  icon: string;
  openModal: boolean;
  showTiles: boolean;
  showLarge: boolean;
  submitForm: boolean;
};

type InfoContextValue = InfoState & {
  setTitle: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
  setLongText: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<string>>;
  setIcon: Dispatch<SetStateAction<string>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setShowTiles: Dispatch<SetStateAction<boolean>>;
  setShowLarge: Dispatch<SetStateAction<boolean>>;
  setSubmitForm: Dispatch<SetStateAction<boolean>>;
};

export const InfoContext = createContext<InfoContextValue | null>(null);

export function useInfoContext() {
  const infoCtx = useContext(InfoContext);

  if (infoCtx === null) {
    throw new Error("InfoContext is null -- that should not be the case!");
  }

  return infoCtx;
}

type InfoContextProviderProps = {
  children: ReactNode;
};

export default function InfoContextProvider({
  children,
}: InfoContextProviderProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [longText, setLongText] = useState("");
  const [image, setImage] = useState("");
  const [icon, setIcon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showTiles, setShowTiles] = useState(true);
  const [showLarge, setShowLarge] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  const ctx: InfoContextValue = {
    title,
    text,
    longText,
    image,
    icon,
    openModal,
    showTiles,
    showLarge,
    submitForm,
    setTitle,
    setText,
    setLongText,
    setImage,
    setIcon,
    setOpenModal,
    setShowTiles,
    setShowLarge,
    setSubmitForm,
  };

  return <InfoContext.Provider value={ctx}>{children}</InfoContext.Provider>;
}
