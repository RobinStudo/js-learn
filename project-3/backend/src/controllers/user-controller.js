export class UserController {
    static upload(req, res) {
        console.log(req.file);
        res.json({
            picture: req.protocol + '://' + req.headers.host + '/' + req.file.path,
        });
    }
}
