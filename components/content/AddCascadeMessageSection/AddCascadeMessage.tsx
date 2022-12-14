import { useState } from "react";
import { data } from "./mockData";
import * as S from "./styles";

export const AddCascadeMessage = () => {
  const [btnState, setBtnState] = useState<boolean>(false);
  return (
    <S.Main>
      <S.AddBtn
        active={btnState}
        onClick={() => {
          setBtnState(!btnState);
        }}
      />
      <S.Text>
        {data
          .split(" ")
          .slice(
            0,
            btnState ? data.split(" ").length : data.split(" ").length / 2
          )
          .join(" ")}
        {!btnState && "..."}
      </S.Text>
    </S.Main>
  );
};
