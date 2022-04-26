let mongoose = require('mongoose')

const URI = 'mongodb://localhost/test';

mongoose.connect(URI, function (error, data) {
    if (error) {
        throw new Error(error)
    }
})

export default mongoose