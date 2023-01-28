import User from '..models/UserModel.js';

export const getUsers = async (req, res) => {
    try{
        const users =await User.fins();
        res.json(users);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}