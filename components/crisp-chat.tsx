"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fd7c56ae-a21d-45cf-a121-aebbd5e4a108");
  }, []);

  return null;
};
