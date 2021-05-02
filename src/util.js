import { v4 as uuidv4 } from "uuid";

function Music() {
  return [
    {
      name: "Aerials",
      cover: "https://i1.sndcdn.com/artworks-000653211046-udjhp9-t500x500.jpg",
      artist: "SOAD",
      audio:
        "https://ds.cdn2.mzmdl.com/cuts/61/1d/611d9c27321ebb6d3569d5c9f9e23ebb/47958332/System_of_a_Down_-_Aerials_b128f0d235.mp3",
      color: ["#D0BE7E", "#14020E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Ur vor gnas",
      cover: "https://i1.sndcdn.com/artworks-000085539202-297jwo-t500x500.jpg",
      artist: "Tigram Jamkochyan",
      audio:
        "https://cdn5.mzmdl.com/music/20200524/Artur_Manasyan_-_Ur_Vor_Gnas_2020_69677601.mp3",
      color: ["red", "pink"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Увезите меня на Дип-хаус",
      cover: "https://ex-hort.ru/_bd/3/55346948.jpg",
      artist: "GAYAZOV$ BROTHER$",
      audio:
        "https://ds.cdn4.mzmdl.com/cuts/64/7c/647cb0c0f4bbb20542ea0d9c1739a58f/66849050/GAYAZOV_BROTHER_-_Uvezite_menya_na_Dip-khaus_b128f0d177.mp3",
      color: ["lightblue", "yellow"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Золото",
      cover:
        "https://cdn.promodj.com/afs/00755b09af36f12c4899b8f4d5c9951812:resize:2000x2000:same:a8d732",
      artist: "СУПЕР ЖОРИК",
      audio:
        "https://ds.cdn5.mzmdl.com/cuts/f1/1e/f11e492add5725b6b678d193f86c7cbe/69819122/SUPER_ZHORIK_SUPER_JORIK_-_Zoloto_Zoloto_2020_b128f0d231.mp3",
      color: ["#E9CE55", "#FEE2A3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bad guy",
      cover: "https://i1.sndcdn.com/artworks-000585893159-qra1pk-t500x500.jpg",
      artist: "Billie Eilish",
      audio:
        "https://cdn4.mzmdl.com/music/20190330/Billie_Eilish_-_bad_guy_63154737.mp3",
      color: ["#FFF304", "black"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "AUSLÄNDER",
      cover:
        "https://images.genius.com/a00668345751eea8e3ce25b6a4467904.1000x1000x1.jpg",
      artist: "RAMMSTEIN",
      audio:
        "https://cdn3.mzmdl.com/cuts/b8/3b/b83bb5fb3927b6435e111f29554678e3/64285337/Rammstein_-_AUSLNDER_b128f0d232.mp3",
      color: ["#AA7465", "#D9CFBF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tango",
      cover: "https://music.gisher.org/public/covers/17/34.jpg",
      artist: "Lilit Karapetyan",
      audio:
        "https://ds.mzmdl.com/get/music/20190725/Lilit_Karapetyan_-_Tango_65678524.mp3",
      color: ["#BEBEC7", "#3C74A0"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default Music;
