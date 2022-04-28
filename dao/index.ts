import mongoose from "../utils/databaseConnect"
import { templateSchema } from "../schemas/template"

const dao = mongoose.model('template', templateSchema)
export default dao
