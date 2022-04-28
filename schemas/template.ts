import mongoose from "../utils/databaseConnect"
const { Schema } = mongoose

export const templateSchema = new Schema({
    status: String,
    backgroundImage: String,
    shareImage: String,
    pageName: String,
    pageConfig: String,
    paperwork: String,
    remark: String,
    url: String,
}, {
    timestamps: {
        createdAt: 'created', updatedAt: 'updated'
    }
})