import aiservice from '../services/ai.service.js'

const getresponse=async (req,res)=>{

    const prompt=req.body.code;

    if(!prompt){
        res.status(400).send("Prompt is required")
    }
    const response=await aiservice(prompt);
    res.send(response);
}

export {getresponse}