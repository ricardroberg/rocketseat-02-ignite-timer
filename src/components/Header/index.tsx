import { HeaderContainer } from "./styles";

import LogoIgnite from "../../assets/logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={LogoIgnite}
        alt="logo composto de 2 triângulos verdes interpostos apontando para diagonal superior direita"
      />
      <nav>
        <NavLink to="/" title="contador">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
