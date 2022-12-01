// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { writeFileSync, chmodSync } from 'fs'
export default function handler(req, res) {
    chmodSync(__dirname + '/../../../../public/log', 777)
    writeFileSync(__dirname + '/../../../../public/log', JSON.stringify(req.query), { flag: 'w', encoding: 'utf-8' })
    res.status(200).json({ status: 'Done' })
}
