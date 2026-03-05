import mongoose,{Schema, Document, models} from "mongoose";

export interface IJob extends Document {
    title: string;
    company: string;
    location: string;
    link: string;
    description?: string;
    scrapedAt: Date;
    createdAt: Date;
}

const JobSchema: Schema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    scrapedAt: {
        type: Date,
        default: Date.now,
         expires: 172800, //  2 days
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
}
)

const Job = models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;