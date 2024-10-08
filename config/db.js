import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export default () => {
    return mongoose.connect(process.env.DB_URL, {
        useNewUrlParser:true,
        UseUnifiedTopology:true
    })
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch( (err) => {
        console.log("DB CONNECTION ISSUES");
        console.log(err);
        process.exit(1);
    } );
}

