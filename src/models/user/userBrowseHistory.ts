import mongoose, { Model, Schema } from "mongoose";

 interface SearchHistory{
    product:mongoose.Schema.Types.ObjectId[];
    userId:mongoose.Schema.Types.ObjectId;
}

const searchHistorySchema:Schema<SearchHistory> = new Schema({

    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ProductModel",
            
        },
    ],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true
    }
},{timestamps:true})

export const SearchHistoryModel:Model<SearchHistory> = (mongoose.models.SearchHistoryModel as Model<SearchHistory>)||(mongoose.model("SearchHistoryModel",searchHistorySchema))

