
import { Code } from "../contants"
export const responds = (error: any, data?: any, total?: string) => {

    if (error) {
        return { msg: error, success: Code.PARAMS_ERROR }
    }
    return { data, total, success: Code.SUCCESS }
}

