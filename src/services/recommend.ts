import api from "@/services/api";

export const getTopBanners = () => {
  return api.get<any>({
    url: "/banner",
  });
};

export const getResource = () => {
  return api.get<any>({
    url: "/recommend/resource",
  });
};
