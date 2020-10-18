import { NextApiRequest, NextApiResponse } from "next";

interface MessageIDNextApiRequest extends NextApiRequest {
  query: {
    id?: string;
  };
}

export default function getById(req: MessageIDNextApiRequest, res: NextApiResponse) {
  res.json({ yourId: req.query.id });
}
