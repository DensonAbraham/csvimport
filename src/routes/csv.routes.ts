import { Router } from "express";
import { uploadcsv,upload} from "../controllers/csv.controller";

const router = Router();

router.route("/csv")
    .post(upload.single("document"),uploadcsv)

export default router;
