import React from "react"
import { Outlet } from "react-router-dom";
import { ComponentHeader} from "../../components/index";
import * as S from "./styles";

export function Layout() {
  return (
    <>
        <ComponentHeader />
        <S.Home>
        <Outlet />
        </S.Home>
     </>
  );
}