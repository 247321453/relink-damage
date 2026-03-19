import { Character } from "@/types/character.types";

export const characters = [
  "Captain",
  "Katalina",
  "Rackam",
  "Io",
  "Eugen",
  "Rosetta",
  "Charlotta",
  "Ghandagoza",
  "Ferry",
  "Narmaya",
  "Lancelot",
  "Vane",
  "Percival",
  "Siegfried",
  "Cagliostro",
  "Yodarha",
  "Zeta",
  "Vaseraga",
  "Seofon",
  "Tweyen",
  "Sandalphon",
  "Id",
] as const;

export const characterConstants = [
  {
    characterName: "Io",
    imageLink: "/images/PudUfF0.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Captain",
    imageLink: "/images/geo13SP.png",
    warpathEnhancement: 0,
  },
  {
    characterName: "Cagliostro",
    imageLink: "/images/IqZeRf0.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Ferry",
    imageLink: "/images/EJgYRkH.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Lancelot",
    imageLink: "/images/oKdaSHy.png",
    warpathEnhancement: 0.1,
  },
  {
    characterName: "Rackam",
    imageLink: "/images/DdUps1x.png",
    warpathEnhancement: 0.2,
  },
  {
    characterName: "Narmaya",
    imageLink: "/images/VqA3bGx.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Vaseraga",
    imageLink: "/images/LVUIWgV.png",
    warpathEnhancement: 0.3,
  },
  {
    characterName: "Siegfried",
    imageLink: "/images/czIrhY4.png",
    warpathEnhancement: 0.4,
    warpathCondition: "Sp",
  },
  {
    characterName: "Vane",
    imageLink: "/images/5N5Hbw0.png",
    warpathEnhancement: 0.3,
    warpathCondition: "Sp",
  },
  {
    characterName: "Id",
    imageLink: "/images/vMskV4b.png",
    warpathEnhancement: 0.1,
    warpathCondition: "S2",
  },
  {
    characterName: "Charlotta",
    imageLink: "/images/QmCqJSI.jpeg",
    warpathEnhancement: 0.1,
    warpathCondition: "Sp",
  },
  {
    characterName: "Zeta",
    imageLink: "/images/olQJazl.png",
    warpathEnhancement: 0.15,
  },
  {
    characterName: "Ghandagoza",
    imageLink: "/images/pn7UzVA.png",
    warpathEnhancement: 1,
    warpathCondition: "Raging Fist",
  },
  {
    characterName: "Rosetta",
    imageLink: "/images/Z62jCzG.png",
    warpathEnhancement: 0.1,
    warpathCondition: "Rose Attacks",
  },
  {
    characterName: "Percival",
    imageLink: "/images/rwPVg0q.png",
    warpathEnhancement: 0.3,
    warpathCondition: "Schlacht",
  },
  {
    characterName: "Katalina",
    imageLink: "/images/WzWXQzT.png",
    warpathEnhancement: 0.25,
  },
  {
    characterName: "Eugen",
    imageLink: "/images/alK5icy.png",
    warpathEnhancement: 0.25,
    warpathCondition: "Grenade",
  },
  {
    characterName: "Yodarha",
    imageLink: "/images/Efr4Hhf.png",
    warpathEnhancement: 0,
  },
  {
    characterName: "Tweyen",
    imageLink: "/images/deLpS4S.png",
    warpathEnhancement: 0.2,
    warpathCondition: "Ch",
  },
  {
    characterName: "Seofon",
    imageLink: "/images/evkM9BQ.png",
    warpathEnhancement: 0.2,
  },
  {
    characterName: "Sandalphon",
    imageLink: "/images/Sandalphon.png",
    warpathEnhancement: 0,
  },
];

export const specialCharacters = ["Tweyen", "Seofon", "Sandalphon"];

export function getCharacterImage(name: Character) {
  return characterConstants.find(
    (charImage) => charImage.characterName === name
  ) === undefined
    ? "/images/ymvvOeh.png"
    : characterConstants.find((charImage) => charImage.characterName === name)
        ?.imageLink;
}
