import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { getTags } from "./api/api";
import useQuery from "./hooks/useQuery";
import { Tag } from "./types";
import { ALL_TOPICS_TAG } from "./components/SideMenu/useGetMenuItem";

type AppContext = {
  data: Tag[] | null;
  filteredCources: Tag[];
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  error: Error | null;
};

type AppProviderProps = {
  children: ReactNode;
};
const defaultContext = {
  data: [],
  filteredCources: [],
  selectedTag: "",
  setSelectedTag: () => {},
  isLoading: true,
  error: null,
};

const getFilteredCources = (cources: Tag[] | null, selectedTag: string) => {
  if (selectedTag === ALL_TOPICS_TAG.value) return cources;

  return cources?.filter((cource) => {
    return cource.tags.includes(selectedTag);
  });
};

export const AppContext = React.createContext<AppContext>(defaultContext);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { data, isLoading, error } = useQuery(getTags);
  const [selectedTag, setSelectedTag] = useState<string>(ALL_TOPICS_TAG.value);

  const filteredCources = useMemo(() => {
    return getFilteredCources(data, selectedTag) ?? [];
  }, [selectedTag, data]);

  return (
    <AppContext.Provider
      value={{
        data,
        isLoading,
        error,
        filteredCources,
        selectedTag,
        setSelectedTag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
