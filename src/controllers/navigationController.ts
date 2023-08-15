import { Request, Response } from 'express';
import NavigationData from '../models/navigationData.js';

const navigationController = async (req: Request, res: Response) => {
    const data = await NavigationData.find();

    return res.send(data);
};

export default navigationController;