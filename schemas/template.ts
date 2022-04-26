import mongoose from "../utils/databaseConnect"
const { Schema } = mongoose

export const templateSchema = new Schema({
    status: String,
    backgroundImage: String,
    shareImage: String,
    pageName: String,
    pageMes: String,
    paperwork: String,
    remark: String
})