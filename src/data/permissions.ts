import { PermissionSource } from "@/utils/PermissionManager";

const permissions: PermissionSource = {
  User: {
    name: "User",
    VIEW_ALL: {
      name: "View All",
      description: "View all users",
    },
  },
};

export default permissions;
