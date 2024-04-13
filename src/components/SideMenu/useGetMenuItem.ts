import { useState, useEffect } from "react";
import { useAppContext } from "../../context";
import { preparingOptions } from "./helpers";
import { Option } from "./RadioInput/RadioInput";

export const ALL_TOPICS_TAG = {
  value: "all",
  label: "Все темы",
};

export const useGetMenuItem = (): [
  tags: Option[],
  setTags: React.Dispatch<React.SetStateAction<Option[]>>
] => {
  const { data } = useAppContext();
  const [tags, setTags] = useState<Option[]>([]);

  useEffect(() => {
    if (data?.length) {
      const allTags = [ALL_TOPICS_TAG, ...preparingOptions(data)];

      setTags(allTags);
    }
  }, [data]);

  return [tags, setTags];
};
