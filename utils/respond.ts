
import { Code } from "../contants"
export const responds = (error: any, data?: any) => {
    if (error) {
        return { msg: error, success: Code.PARAMS_ERROR }
    }
    return { data, success: Code.SUCCESS }
}

