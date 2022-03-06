import api from "@/services/api";

export const loginByPassword = (params: { phone: number, password: string }) => {
  return api.post<any>({
    url: "/login/cellphone",
    data: params
  });
};