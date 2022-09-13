import permissionSource from "@/data/permissions";

export interface PermissionSource {
  [key: string]: {
    [key: string]: string | SourceAttributeDetails;
  };
}

interface SourceAttributeDetails {
  name: string;
  description: string;
}

interface AttributeDetails extends SourceAttributeDetails {
  value: string;
}

interface PermissionArray {
  name: string;
  attributes: AttributeDetails[];
}

interface Permissions {
  [key: string]: {
    [key: string]: string;
  };
}

class PermissionManager {
  private source: PermissionSource;
  private attributes: string;
  public permissions: Permissions;

  constructor(source: PermissionSource) {
    this.source = source;
    this.attributes = "";
    this.permissions = {} as Permissions;
    this.initializePermissions();
  }

  private initializePermissions() {
    this.permissions = {} as Permissions;
    Object.entries(this.source).map((permission) => {
      this.permissions[permission[0]] = {};
      let attributes = Object.entries(permission[1]);
      attributes.map((item) => {
        if (item[0] === "name") return;
        this.permissions[permission[0]][
          item[0]
        ] = `${permission[0].toUpperCase()}_${item[0]}`;
      });
    });
  }

  public getPermissions() {
    let permissions: PermissionArray[] = [];
    Object.entries(this.source).map((permission) => {
      permissions.push({
        name: permission[1].name
          ? (permission[1].name as string)
          : permission[0],
        attributes: [],
      });

      let attributes = Object.entries(permission[1]);
      const index = permissions.findIndex((item) => {
        if (permission[1].name) return item.name === permission[1].name;
        return item.name === permission[0];
      });
      attributes.map((item) => {
        if (item[0] === "name") return;
        const attribute = item[1] as SourceAttributeDetails;
        permissions[index].attributes.push({
          name: attribute.name,
          description: attribute.description || "",
          value: `${permission[0].toUpperCase()}_${item[0]}`,
        });
      });
    });
    return permissions;
  }

  public setAttributes(attributes: string) {
    this.attributes = attributes;
  }

  public hasPermission(permission: string | string[], some: boolean = false) {
    let attributes = this.attributes.split("|");
    if (typeof permission === "string") {
      return attributes.includes(permission);
    } else {
      if (some) {
        return permission.some((item) => attributes.includes(item));
      } else {
        return permission.every((item) => attributes.includes(item));
      }
    }
  }
}

export default new PermissionManager(permissionSource);
