import { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import "dayjs/locale/ko";

import { StroageService } from "../../services/StorageService";
import * as AuthApi from "../AuthApi";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const refreshToken = await StroageService.getRefreshToken();

    if (refreshToken) {
        // 토큰 Verify 진행
        const verified = await AuthApi.verifyToken({ token: refreshToken });

        // Verified 된 RefreshToken이 존재할 때 AccessToken 발급 진행
        if (refreshToken && verified) {
            const accessToken = await AuthApi.refreshToken({ token: refreshToken })
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
    }
    return config;
};

const refreshErrorHandle = (err: any) => {
    Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle }
