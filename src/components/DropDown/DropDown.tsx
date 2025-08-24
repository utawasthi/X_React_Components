import { useEffect, useRef, useState } from "react"

type MenuItem = string | SubMenu;

interface SubMenu {
  label: string;
  items: MenuItem[];
}

type MenuData = MenuItem[];

const menuData : MenuData = [{
    label: "Profile",
    items: ["View Profile", "Edit Profile", "Logout"],
  },
  {
    label: "Settings",
    items: [
      "General",
      "Privacy",
      {
        label: "Advanced",
        items: ["API Keys", "Integrations", "Developer Mode"],
      },
      {
        label: "Notifications",
        items: ["Email Alerts", "SMS Alerts", "Push Notifications"],
      },
      {
        label: "Appearance",
        items: ["Themes", "Layout", "Font Size"],
      },
    ],
  },
  {
    label: "Help",
    items: ["Docs", "Community", "Contact"],
  },
  {
    label: "Projects",
    items: [
      "My Projects",
      "New Project",
      {
        label: "Templates",
        items: ["Business", "Education", "Personal", "Open Source"],
      },
    ],
  },
  {
    label: "Reports",
    items: [
      "Daily",
      "Weekly",
      "Monthly",
      {
        label: "Custom",
        items: ["By Date", "By Project", "By User"],
      },
    ],
  },
  {
    label: "Admin",
    items: [
      "User Management",
      "Roles & Permissions",
      {
        label: "System Settings",
        items: ["Backups", "Logs", "Server Status"],
      },
    ],
  },
];

function DropDown() {

  const [activeMenu , setActiveMenu] = useState<MenuData | SubMenu | null>(null);

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e : MouseEvent) {
      if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown" , handleClickOutside);

    return () => document.removeEventListener("mousedown" , handleClickOutside);
  } , []);

  const handleClick = (item : MenuItem) => {
    if(typeof item === "object"){
      setActiveMenu(item);
    }
    else{
      setActiveMenu(null);
    }
  }

  const getItems = (menu : MenuData | SubMenu) => {
    if("items" in menu) return menu.items;
    return menu;
  }

  return (
    <div 
      className = 'mt-20 relative inline-block text-white text-base'
      ref = {dropDownRef}
    >
      <button
        className = 'cursor-pointer px-13 py-3 bg-white/20 rounded-3xl text-2xl'
        onClick = {() => setActiveMenu(menuData)}
      >
        Open
      </button>

      {
        activeMenu && (
          <div className = 'font-light absolute ml-10 mt-2 mb-4 w-48 bg-white/20 rounded-lg shadow-md overflow-hidden'>
            <ul className = 'divide-y-[0.1px] divide-white/30'>
              {
                getItems(activeMenu).map((item , idx) => (
                  <li 
                    key = {idx}
                    onClick = {() => handleClick(item)}
                    className = 'flex justify-between px-3 py-3 text-white/80 cursor-pointer items-center'
                  >
                    {
                      typeof item === "object" ? (
                        <>
                          <span className = 'text-white/80'>
                            {item.label}
                          </span>
                          <span className = 'text-gray-200 text-sm'> <CaretRight/> </span>
                        </>
                      ) : (
                        item
                      )
                    }
                  </li>
                ))
              }
            </ul>

            <button
              onClick = {() => setActiveMenu(null)}
              className = 'w-full px-4 py-2 text-sm text-white/70 cursor-pointer border-t-[0.1px] border-white/30'
            >
              Back
            </button>
          </div>
        )
      }
    </div>
  )
}

const CaretRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
)}

export default DropDown