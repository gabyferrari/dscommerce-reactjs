import { createContext } from "react";
import type { AccessTokenPayloadDTO } from "../models/auth";

export type ContextTokenType = {
  contextTokenPayload: AccessTokenPayloadDTO | undefined;
  setContextTokenPayload: (accessTokenPayload: AccessTokenPayloadDTO | undefined) => void;
};

export const ContextToken = createContext<ContextTokenType>({
  contextTokenPayload: undefined,
  setContextTokenPayload: () => {},
});
