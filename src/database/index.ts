import mongoose from 'mongoose';
import dotenv from '../utils/dotenv';

const uri: string | undefined = dotenv.URI_MONGODB;
if (uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch((e: any) => { console.error('Connection error', e.message) })
} else {
    console.error('MongoDB connection error: Connection string is undefined');
}

export default mongoose.connection
