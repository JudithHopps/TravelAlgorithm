"use client";

import Image from "next/image";
import styled from "styled-components";
import Common from "@/styles/globalStyles";

const S = {
  ImageDiv: styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  `,
};
const Home = () => {
  return (
    <Common.MainDiv>
      <Common.MarginDiv>
        <S.ImageDiv src="/main.png" alt="메인 사진" fill priority />
      </Common.MarginDiv>
    </Common.MainDiv>
  );
};
export default Home;
