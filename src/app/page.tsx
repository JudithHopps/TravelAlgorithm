"use client";

import Image from "next/image";
import styled from "styled-components";
import Common from "@/styles/globalStyles";

const S = {
  ImageDiv: styled(Image)`
    max-width: 500px;
    max-height: 600px;
    border-radius: 5%;
  `,
};
const Home: React.FC = () => {
  return (
    <Common.MainDiv>
      <Common.MarginDiv>
        <S.ImageDiv src="/main.png" alt="메인 사진" fill priority />
      </Common.MarginDiv>
    </Common.MainDiv>
  );
};
export default Home;
