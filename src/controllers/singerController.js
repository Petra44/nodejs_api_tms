import Singer from "../models/TmsSchema.js";
import dotenv from "dotenv";
dotenv.config();

const { DOMAIN } = process.env;

// GET: / - geeft alle singers terug (array) & /?deelnemer=???? - geeft 1 singer terug ( object ) - qeury methode
const getAllSingers = async (req, res) => {
  try {
    const { name } = req.query;
    // console.log(name);
    const singers = await Singer.find();
    // console.log(singers);
    // deze zorgt voor de query op naam http://localhost:3000/api/v1/tms
    if (name?.toLowerCase()) {
      const filteredSingers = singers.filter((singer) =>
        singer.name?.toLowerCase().includes(name?.toLowerCase())
      );
      return res.status(200).json(filteredSingers[0]);
    }
    // de url-link aanklikbaar maken
    const updatedSingers = singers.map((singer) => {
      singer.image = `${DOMAIN}/images/${singer.image}`;
      return singer;
    });
    res.status(200).json(updatedSingers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: /:id - geeft 1 singer terug (object) - params methode
const getSinger = async (req, res) => {
  try {
    const { id } = req.params;
    const singer = await Singer.findById(id);
    singer.image = `${DOMAIN}/images/${singer.image}`;
    res.status(200).json(singer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: /:id - update heel het object, geeft het updated object terug (object)
const updateSinger = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, startedEpisode, episodeCount, participant, place, image } =
      req.body;
    await Singer.replaceOne(
      { _id: id },
      {
        name,
        startedEpisode,
        episodeCount,
        participant,
        place,
        image,
      }
    );
    const updatedSinger = {
      name,
      startedEpisode,
      episodeCount,
      participant,
      place,
      image,
    };
    res.status(200).json(updatedSinger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE: /:id - verwijderd 1 singer, geeft enkel succes bericht terug
const deleteSinger = async (req, res) => {
  try {
    const { id } = req.params;
    const singers = await Singer.deleteOne({ _id: id });
    res.status(200).json(singers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: / - singer kunnen toevoegen - misschien voor in de toekomst
const postSinger = async (req, res) => {
  try {
    const { name, startedEpisode, episodeCount, participant, place, image } =
      req.body;
    const singer = await Singer.create({
      name,
      startedEpisode,
      episodeCount,
      participant,
      place,
      image,
    });
    res.status(201).json(singer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllSingers, getSinger, updateSinger, deleteSinger, postSinger };
