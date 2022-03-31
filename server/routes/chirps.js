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
    res.send(500);
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
router.post('/', (req, res, next) => {
  try {
  res.json(db.Chirps.post());
} catch (e) {
  console.log(e)
  res.sendStatus(500);
  }
});

//Delete
router.delete('/:id', (req, res, next) => {
  try {
    res.json((db.Chirps.delete(req.params.id))[0]);
  } catch (e) {    
    console.log(e)
    res.sendStatus(500);
       }
   });

// Update
router.put('/:id/edit', (req, res, next) => {
  try {
    res.json((db.Chirps.put(req.params.id))[0]);
  } catch (e) { 
    console.log(e)
    res.sendStatus(500);
  }
  res.redirect('/');
})

export default router;