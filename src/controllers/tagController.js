import mongoose from 'mongoose';

import { TagSchema } from '../models/tagModel'

const Tag = mongoose.model('Tags', TagSchema);
const error_message = "An Error Occured.."

export const addTag = (req, res) => {
    // Define new tag for Db from JSON body of post 
    let movieTags = new Tag(req.body);
    movieTags.save((err, tag) => {
        if (err) {
            res.send(error_message)
        }
        res.json(tag)
    })
}

// GET controller to view all tags
export const getTags = (req,res) => {
  Tag.find({}, (err, tag) => {
    if (err) {
      res.send(error_message)
    }
    res.json(tag)
  })
}

// GET tag by ID /api/v0/tags/:tagID
export const getTagByID = (req, res) => {
    Tag.findById(req.params.tagID, (err, tag) => {
        if (err) {
            res.send(error_message)
        }
        res.json(tag)
    })  
}

// PUT handler to update tags pattern /api/v0/tags/:tagID
export const updateTag = (req,res) => {
  Tag.findOneAndUpdate({ _id: req.params.tagID }, req.body, { new: true, useFindAndModify: false }, (err, tag) => {
    if (err) {
      res.send(error_message)
    }
    res.json(tag)
  })
}

// DELETE handler to remove tags pattern /api/v0/tags/:tagID
export const deleteTag = (req,res) => {
  Tag.deleteOne({ _id: req.params.tagID }, (err, tag) => {
    if (err) {
      res.send(error_message)
    }
    res.json({message: "Successfully Deleted Tag"})
    })
}
