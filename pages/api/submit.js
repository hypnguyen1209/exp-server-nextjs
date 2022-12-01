// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { writeFileSync, chmodSync } from 'fs'
export default function handler(req, res) {
    writeFileSync(__dirname + '/../../../static/log', JSON.stringify(req.query), { flag: 'w', encoding: 'utf-8' })
    res.status(200).json({ status: 'Done' })
}
