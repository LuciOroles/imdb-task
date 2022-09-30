import { InputGroup, InputRightElement, Icon, Input } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchTitleAtom } from "./store/atoms/seachTitle";

export interface ISearchBoxProps {}

export function SearchBox(props: ISearchBoxProps) {
  const navigate = useNavigate();
  const [text, setText] = useRecoilState<string>(searchTitleAtom);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/search?title=${encodeURIComponent(text)}`);
    }
  };

  return (
    <InputGroup>
      <Input
        placeholder="Title search"
        value={text}
        onChange={(evt) => {
          setText(evt.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <InputRightElement children={<Icon color="green.500" />} />
    </InputGroup>
  );
}
