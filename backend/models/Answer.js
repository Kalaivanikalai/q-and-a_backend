const mongoose=require('mongoose');
const answerSchcema=new mongoose.Schema({
    question_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Questions",
    },
    answer:String,
    created_at:{
        type:Date,
        default:Date.now()
    },
    user:Object,
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments",
    },
});

module.exports=mongoose.model("Answer", answerSchcema);