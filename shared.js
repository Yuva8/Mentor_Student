const mongoose = require('mongoose');

module.exports = {
    async connectMongoose(){
        try{
        const conn = await mongoose.connect(process.env.MONGOOSE_CONNECTION_URL);
            console.log(conn);
        }
        catch(e){
            console.log(e)
        }
    }
}