import data from "../data.json";

export default function aboutMe(req, res) {
  const aboutMe = data.aboutMe;
  return res.status(200).json({ aboutMe });
}
