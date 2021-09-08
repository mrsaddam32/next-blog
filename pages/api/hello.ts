import { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    nama: "Muhammad Saddam Pradana",
    nim: 10190130,
    jurusan: "Rekayasa Perangkat Lunak",
    hobi: ["Coding", "Gaming"],
    lulus: false,
  });
};
