import React from "react";
import {
  SideBarLink,
  SideBtnWrap,
  SidebarContainer,
  SideBarRoute,
  Icon,
  CloseIcon,
  SidebarMenu
} from "./SidebarElements";

const Sidebar = ({toggle,isOpen}) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen} >
      <Icon>
        <CloseIcon onClick={toggle} ></CloseIcon>
      </Icon>
      <SidebarMenu>
        <SideBarLink to="/">Pizzas</SideBarLink>
        <SideBarLink to="/">Desserts</SideBarLink>
        <SideBarLink to="/">Full Menu</SideBarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">Order Now</SideBarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
