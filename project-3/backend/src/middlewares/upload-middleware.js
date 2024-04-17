import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        const fragment = file.originalname.split('.');
        const uniqueFIlename = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueFIlename + '.' + fragment[fragment.length - 1]);
    }
})

export const upload = multer({
    storage: storage
});
