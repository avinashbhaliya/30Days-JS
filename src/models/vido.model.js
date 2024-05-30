import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new Schema({
    videoFile: {
        type: String, //clodnury url
        required: true,
    },
    thumbnail: {
        type: String, //clodnury url
        required: true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    time:{
        type:Number,
        required:true
    },
    view:{
        type:Number,
        default:0
    },
    isPublised:{
        type:Number, //cloudniary url
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestaps: true })

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)