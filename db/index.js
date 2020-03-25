const mongoose = require('mongoose');
const app = require('../app')
const PORT = process.env.PORT || 3977

        mongoose.connect('mongodb://localhost:27017/dbforDevelop', {useUnifiedTopology: true }, (err, res) => {
        if (err) {
            throw err
        } else {
            app.listen(PORT, () => {
                console.log('Server Running on http://localhost:' + PORT)
            })
        }
    })




