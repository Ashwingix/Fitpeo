import React from "react";
import { GoalIcon, PopularDishesIcon, MenusIcon } from "../ui/icons";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, bgColor }) => {
  return (
    <div className="flex  items-center justify-between p-4 hover:bg-gray-800 cursor-pointer rounded-md">
      <div className="flex items-center space-x-4">
        <div
          className={`w-10 h-10 rounded-3xl flex items-center justify-center ${bgColor}`}
        >
          {icon}
        </div>
        <span className="text-white">{label}</span>
      </div>
      <div className="text-white">&gt;</div>
    </div>
  );
};

const MenuBar: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 p-4 rounded-xl">
      <MenuItem icon={<GoalIcon />} label="Goals" bgColor="bg-red-500" />
      <MenuItem
        icon={<PopularDishesIcon />}
        label="Popular Dishes"
        bgColor="bg-blue-500"
      />
      <MenuItem icon={<MenusIcon />} label="Menus" bgColor="bg-teal-500" />
    </div>
  );
};

export default MenuBar;
