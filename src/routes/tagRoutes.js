import { addTag } from "../controllers/tagController";


const routes = (app) => {
    // Route for tags
    app.route('/api/v0/tags')
        .get((req, res) =>
            res.send('TAG API GET'))
        // uses addTag from controller 
        .post(addTag);



    app.route('/api/v0/tags/:tagId')
        .put((req, res) =>
            res.send('PUT request successful!'))
        //create delete request
        .delete((req, res) =>
            res.send('DELETE request successful'))

}

export default routes;