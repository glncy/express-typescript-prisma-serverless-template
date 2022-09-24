import { PermissionSource } from "@/utils/PermissionManager";
/**
 * @name PermissionSource
 * @type {PermissionSource}
 * @example
 * {
 *  "PermissionName": {
 *   "name": "Permission Name (optional)",
 *   "ATTRIBUTE_NAME": {
 *      "name": "Attribute Name",
 *      "description": "Attribute Description"
 *    }
 *  }
 * }
 * @description
 * This is the source of permissions and attributes.
 */
const permissions: PermissionSource = {
  User: {
    VIEW_ALL: {
      name: "View All",
      description: "View all users",
    },
    UPDATE: {
      name: "Update",
      description: "Update user",
    },
  },
};

export default permissions;
