import mongoose from 'mongoose';

import { TagSchema } from '../models/tagModel'

const Tag = mongoose.model('Tags', TagSchema);

export const addTag = (req, res) => {
    // Define new tag for Db from JSON body of post 
    let newTag = new Tag(req.body);
    newTag.save((err, tag) => {
        if (err) {
            res.send(err)
        }
        res.json(tag)
    })
}