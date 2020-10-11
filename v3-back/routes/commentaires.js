const router = new require("express").Router();
const CommentaireModel = require("../models/Commentaire")
router.get("/", async (req, res, next) => {
    try {
        const commentaires = await CommentaireModel.find()
            .populate("to")
            .populate("from");

        // console.log(commentaires)
        res.json(commentaires);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const post = await CommentaireModel.findById(
                req.params.id
            )
            .populate("to")
            .populate("from");
        res.json(post);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    const {
        to,
        from,
        message
    } = req.body;
    try {
        const posts = await CommentaireModel.create({
            to,
            from,
            message,
            date: Date.now(),
        });
        res.json(posts);

    } catch (err) {
        next(err);
    }
});
module.exports = router;