import React from "react";
import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const generateSidebarItems = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: React.createElement(
          NavLink,
          { to: `/${role}/${item.path}` },
          item.name
        ),
      });
    }
    if (item.children) {
      acc.push({
        key: item.name as string,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: React.createElement(
                NavLink,
                { to: `/${role}/${child.path}` },
                child.name
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
