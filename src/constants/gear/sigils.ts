import { TraitLiterals } from "@/types/traits.types";

export const traitLiterals = [
  "DMG Cap",
  "Critical Hit DMG",
  "Stamina",
  "Enmity",
  "Tyranny",
  "Life on the Line",
  "Skilled Assault",
  "Linked Together",
  "Combo Booster",
  "Combo Finisher DMG",
  "Charged Attack DMG",
  "Lucky Charge",
  "Quick Charge",
  "Concentrated Fire",
  "Throw DMG",
  "Injury to Insult",
  "Less Is More",
  "Supplementary DMG",
  "Weak Point DMG",
  "Head Start",
  "Dodge Payback",
  "Power Hungry",
  "Glass Cannon",
  "Berserker",
  "War Elemental",
  "Stout Heart",
  "Awakening",
  "Low Profile",
  "Steady Focus",
  "Autorevive",
  "Guts",
  "Potion Hoarder",
  "Quick Cooldown",
  "Cascade",
  "Uplift",
  "Nimble Onslaught",
  "Precise Wrath",
  "Aegis",
  "Garrison",
  "Steel Nerves",
  "Firm Stance",
  "Skill Sealed Resistance",
  "Improved Dodge",
  "Alpha",
  "Gamma",
  "Beta",
  "ATK",
  "Stun Power",
  "Flight over Fight",
  "Critical Hit Rate",
  "Warpath",
  "Boundary/Ain+",
  "Berserker Echo",
  "Spartan Echo",
  "Super Ultimate Perfect Dodge",
] as const;

// export const singleSigilsObject = singleSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Single" as const,
//   };
// });

// export const opusSigils = ["Alpha", "Gamma", "Beta"];
// export const opusSigilsObjects: SigilTrait[] = opusSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Opus" as const,
//     allowedSecondaryTraits: ["Damage Cap"],
//   };
// });

// export const baseStatSigilsObjects: SigilTrait[] = baseStatSigils.map(
//   (sigil) => {
//     const allowedSecondaryTraits = attackSigils.concat(
//       defensiveSigils,
//       supportSigils,
//       specialSigils
//     );
//     return {
//       name: sigil ,
//       type: "BaseStat" as const,
//       allowedSecondaryTraits: allowedSecondaryTraits,
//     };
//   }
// );

// export const attackSigilsObjects: SigilTrait[] = attackSigils.map((sigil) => {
//   const allowedSecondaryTraits = defensiveSigils.concat(
//     supportSigils,
//     specialSigils
//   );
//   return {
//     name: sigil ,
//     type: "Attack" as const,
//     allowedSecondaryTraits: allowedSecondaryTraits,
//   };
// });

// export const defensiveSigilsObjects: SigilTrait[] = defensiveSigils.map(
//   (sigil) => {
//     const allowedSecondaryTraits = supportSigils.concat(specialSigils);
//     return {
//       name: sigil ,
//       type: "Defensive" as const,
//       allowedSecondaryTraits: allowedSecondaryTraits,
//     };
//   }
// );

// export const supportSigilsObjects: SigilTrait[] = supportSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Support" as const,
//   };
// });

// export const specialSigilsObjects: SigilTrait[] = specialSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Special" as const,
//   };
// });

// export const allSigils = opusSigils.concat(
//   singleSigils,
//   awakeningSigils,
//   baseStatSigils,
//   attackSigils,
//   defensiveSigils,
//   supportSigils,
//   specialSigils
// );

// export const awakeningSigilsObjects: SigilTrait[] = awakeningSigils.map(
//   (sigil) => {
//     const allowedSecondaryTraits = attackSigils.concat(
//       baseStatSigils,
//       defensiveSigils,
//       supportSigils,
//       specialSigils
//     );
//     return {
//       name: sigil ,
//       type: "Awakening",
//       allowedSecondaryTraits: allowedSecondaryTraits.concat(["Awakening"]),
//     };
//   }
// );

// export const allSigilObjects = opusSigilsObjects.concat(
//   singleSigilsObject,
//   awakeningSigilsObjects,
//   baseStatSigilsObjects,
//   attackSigilsObjects,
//   defensiveSigilsObjects,
//   supportSigilsObjects,
//   specialSigilsObjects
// );

export const sigilOptions = traitLiterals.map((sigil) => {
  return {
    label: sigil,
    value: sigil,
  };
});

export const sigilConstants: {
  sigilName: TraitLiterals;
  sigilImage: string;
  sigilColor: string;
  sigilSeconds: string;
  sigilMaxLevel: number;
}[] = [
  {
    sigilName: "None" as TraitLiterals,
    sigilImage: "/images/ymvvOeh.png",
    sigilColor: "None",
    sigilSeconds: "None",
    sigilMaxLevel: 0,
  },
  {
    sigilName: "DMG Cap" satisfies TraitLiterals,
    sigilImage: "/images/3lmC4aG.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 65,
  },
  {
    sigilName: "ATK",
    sigilImage: "/images/qKjRxGQ.png",
    sigilColor: "Gray",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 50,
  },
  {
    sigilName: "Stun Power",
    sigilImage: "/images/cl9Yjci.png",
    sigilColor: "Gray",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Critical Hit Rate",
    sigilImage: "/images/ATzn4B3.png",
    sigilColor: "Crit",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Critical Hit DMG",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Linked Together",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Stamina",
    sigilImage: "/images/aWX0IAj.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Enmity",
    sigilImage: "/images/FHrM7Hr.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Tyranny",
    sigilImage: "/images/FPRMU3t.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Concentrated Fire",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Quick Charge",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Charged Attack DMG",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Lucky Charge",
    sigilImage: "/images/HUDS9kJ.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Skilled Assault",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Life on the Line",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Injury to Insult",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Combo Booster",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Combo Finisher DMG",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Throw DMG",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Weak Point DMG",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Dodge Payback",
    sigilImage: "/images/7HKGnqu.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Power Hungry",
    sigilImage: "/images/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Less Is More",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Supplementary DMG",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Glass Cannon",
    sigilImage: "/images/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Head Start",
    sigilImage: "/images/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Berserker",
    sigilImage: "/images/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "War Elemental",
    sigilImage: "/images/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Quick Cooldown",
    sigilImage: "/images/wGc0qLp.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Cascade",
    sigilImage: "/images/wGc0qLp.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Uplift",
    sigilImage: "/images/EJYhNo7.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Nimble Onslaught",
    sigilImage: "/images/ZIDWafk.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Precise Wrath",
    sigilImage: "/images/ZIDWafk.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Autorevive",
    sigilImage: "/images/2qKcEOx.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Guts",
    sigilImage: "/images/D5ySGCd.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Potion Hoarder",
    sigilImage: "/images/uhELCWH.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Low Profile",
    sigilImage: "/images/rSpaDyN.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Crabvestment Returns" as TraitLiterals,
    sigilImage: "/images/kZ4liwS.png",
    sigilColor: "Unique",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Stout Heart",
    sigilImage: "/images/pSxX0U6.png",
    sigilColor: "Unique",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Steady Focus",
    sigilImage: "/images/pSxX0U6.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Nimble Defense" as TraitLiterals,
    sigilImage: "/images/ybPyQwu.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Aegis",
    sigilImage: "/images/gj1GNUU.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Garrison",
    sigilImage: "/images/egexYSS.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Steel Nerves",
    sigilImage: "/images/egexYSS.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Firm Stance",
    sigilImage: "/images/gFXAGMY.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Skill Sealed Resistance",
    sigilImage: "/images/JGgx4Xw.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Stronghold" as TraitLiterals,
    sigilImage: "/images/egexYSS.png",
    sigilColor: "Blu_Exclusive",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Improved Dodge",
    sigilImage: "/images/kFd60c3.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Flight over Fight",
    sigilImage: "/images/kFd60c3.png",
    sigilColor: "Blu_Exclusive",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Alpha",
    sigilImage: "/images/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Beta",
    sigilImage: "/images/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Gamma",
    sigilImage: "/images/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Awakening",
    sigilImage: "/images/jnMUx4D.png",
    sigilColor: "Unique",
    sigilSeconds: "OrangeGrayCritRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Warpath",
    sigilImage: "/images/jnMUx4D.png",
    sigilColor: "Unique_New",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Boundary/Ain+",
    sigilImage: "/images/jnMUx4D.png",
    sigilColor: "Unique_New",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Berserker Echo",
    sigilImage: "/images/3lmC4aG.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Spartan Echo",
    sigilImage: "/images/3lmC4aG.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Super Ultimate Perfect Dodge",
    sigilImage: "/images/3lmC4aG.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
];

export function getSigilImage(_sigil: TraitLiterals) {
  if (_sigil === "Awakening") return "/images/jnMUx4D.png";
  return sigilConstants.find((sigil) => sigil.sigilName === _sigil) ===
    undefined
    ? "/images/ymvvOeh.png"
    : sigilConstants.find((sigil) => sigil.sigilName === _sigil)?.sigilImage;
}
