import * as express from "express"
const router = express.Router();
import db from '../db';

//get all chirps
router.get('/', async (req, res) => {
  try {
    console.log("YES")
    res.json(await db.Chirps.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//get chirps by id
router.get("/:id?", async (req, res) => {
  try {
    res.json((await db.Chirps.one(req.params.id))[0]);
  } catch (e) {
    console.log(e)
    res.sendStatus(500);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
  const body = req.body;
  const dbRes = await db.Chirps.insert(body.userid, body.content, body.location);
  res.sendStatus(200).json(dbRes);
} catch (e) {
  console.log(e)
  }
});

//Delete
router.delete('/:id', async (req, res) => {
  try {
   const id = req.params.id;
   const dbRes = await db.Chirps.cut(id);
  res.sendStatus(200).send(dbRes);
  } catch (e) {    
    console.log(e)
     }
   });

// Update
router.put('/:id', async (req, res) => {
  try {
   const id = req.params.id;
   const content = req.body.content;
   const dbRes = await db.Chirps.edit(id, content);
   res.sendStatus(200).json(dbRes);
  } catch (e) { 
    console.log(e)
  }
 })

export default router;