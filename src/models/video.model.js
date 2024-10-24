import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudnairy url
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, //cloudniary 
            required: true,
        },
        duration: {
            type: Number, //cloudniary 
            default: 0,
        },
        isPublished: {
            type: Boolean, //cloudniary 
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId, //cloudniary 
            ref: 'User'
        },
    }, 

    {timestamps: true}
)


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video', videoSchema)

