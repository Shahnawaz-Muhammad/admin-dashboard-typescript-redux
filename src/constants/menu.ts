export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "menu",
    label: "Menu",
    isTitle: true,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    isTitle: false,
    icon: "mgc_home_3_line",
    url: "/dashboard",
  },
  {
    key: "bookings",
    label: "Bookings",
    isTitle: false,
    icon: "mgc_user_3_line",
    url: "/bookings",
  },

  {
    key: "admins",
    label: "Admins",
    isTitle: false,
    icon: "mgc_user_4_line",
    children: [
      {
        key: "all-admins",
        label: "All Admins",
        url: "/admins/all-admins",
        parentKey: "admins",
      },
      {
        key: "add-admin",
        label: "Add Admin",
        url: "/admins/add-admin",
        parentKey: "admins",
      },
    ],
  },
  {
    key: "users",
    label: "Users",
    isTitle: false,
    icon: "mgc_user_3_line",
    url: "/users",
  },

  {
    key: "apps-project",
    label: "Project",
    isTitle: false,
    icon: "mgc_building_2_line",
    children: [
      {
        key: "project-list",
        label: "List",
        url: "/apps/project/list",
        parentKey: "apps-project",
      },
      {
        key: "project-detail",
        label: "Detail",
        url: "/apps/project/detail",
        parentKey: "apps-project",
      },
      {
        key: "project-create",
        label: "Create",
        url: "/apps/project/create",
        parentKey: "apps-project",
      },
    ],
  },
];

export { MENU_ITEMS };
