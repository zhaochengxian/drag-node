
import { Code } from "../contants"
export const responds = (error: any, data?: any) => {
    if (error) {
        return { data: error, success: Code.PARAMS_ERROR }
    }
    return { data, success: Code.SUCCESS }
}

