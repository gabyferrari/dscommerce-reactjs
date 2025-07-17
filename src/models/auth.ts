export type RoleEnum = "ROLE_CLIENT" | "ROLE_ADMIN";

export type CredentialsDTO = {
  username: string;
  password: string;
};

export type AccessTokenPayloadDTO = {
  exp: number;
  username: string;
  authorities: RoleEnum[];
};
