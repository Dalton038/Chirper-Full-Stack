import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps')
const one = async (id) => Query('SELECT * FROM chirps WHERE id = ?', [id])
const insert = async (userid, content, location) => Query("post into chirps( userid, content, location ) values (?,?,?)", [userid, content, location]);
const cut = async (id) => Query("delete from chirps where id = ?", [id]);
const edit = async (id, content) => Query("update chirps set content = ? where chirps.id = ?", [content, id]);

export default {
all,
one,
insert,
cut,
edit
};