import { addTag, getTagByID, getTags, updateTag, deleteTag } from "../controllers/tagController";

const routes = (app) => {
    // Route for tags
    app.route('/api/v0/tags')
        .get(getTags)
        // uses addTag from controller 
        .post(addTag);


    app.route('/api/v0/tags/:tagID([A-Za-z0-9_.]+)')
    .get(getTagByID)
        .put(updateTag)
        //create delete request
        .delete(deleteTag)

}

export default routes; 