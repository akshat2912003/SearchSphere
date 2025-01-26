const User = require('../models/User');

exports.getAllQuestions = async (req,res) => {
    try{
        const questions = await User.findOne({type: 'MCQ'});
        return res.status(200).json({
            success: true,
            message: 'All questions fetched successfully',
            data: questions
        })

    } catch(error){
        console.log("Error in getting all questions", error.message);
        return res.status(500).json({
            success: false,
            message: 'Error in getting all questions',
            error: error.message
        })
    }
}

exports.getSpecificQuestion = async(req,res) =>{
    try{

        const {query, limit1 = 10} = req.body;
        if(!query){
            const que = await User.find().limit(limit1);
            return res.status(200).json({
                success: true,
                message: 'All questions fetched successfully',
                data: que
            })
        }

        const result = await User.find({
            $or: [
                {title: { $regex: query, $options: 'i' }},
                {type: { $regex: query, $options: 'i' }},
                {anagramType: { $regex: query, $options: 'i' }},
                {solution: { $regex: query, $options: 'i' }}
            ]
        }).limit(limit1);

        if(!result){
            return res.status(404).json({
                success: false,
                message: 'No questions found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Questions fetched successfully',
            data: result
        })

    } catch(error){
        console.log("Error in getting specific question", error.message);
        return res.status(500).json({
            success: false,
            message: 'Error in getting specific question',
            error: error.message
        })
    }
}

