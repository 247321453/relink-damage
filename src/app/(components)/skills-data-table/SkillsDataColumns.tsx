"use client";

import { Badge } from "@/components/ui/badge";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { numberWithCommas, safeDecimalMultiplier } from "@/lib/calculators";
import { SkillCalculatedTable } from "@/types/skill.types";
import { ColumnDef } from "@tanstack/react-table";

export const skillsDataColumns: ColumnDef<SkillCalculatedTable>[] = [
  {
    id: "calculations",
    header: () => <div className="px-2">Calculations (2.9.4)</div>,
    columns: [
      // {
      //   id: "select",
      //   header: ({ table }) => (
      //     <div className="w-full px-2 flex flex-col justify-center">
      //       <Checkbox
      //         className="my-auto"
      //         checked={
      //           table.getIsAllPageRowsSelected() ||
      //           (table.getIsSomePageRowsSelected() && "indeterminate")
      //         }
      //         onCheckedChange={(value) =>
      //           table.toggleAllPageRowsSelected(!!value)
      //         }
      //         aria-label="Select all"
      //       />
      //     </div>
      //   ),
      //   cell: ({ row }) => (
      //     <div className="w-full px-2 flex flex-col justify-center">
      //       <Checkbox
      //         checked={row.getIsSelected()}
      //         onCheckedChange={(value) => row.toggleSelected(!!value)}
      //         aria-label="Select row"
      //       />
      //     </div>
      //   ),
      //   enableSorting: false,
      //   enableHiding: false,
      // },
      {
        accessorKey: "skill",
        header: () => (
          <div className="w-full px-2 flex flex-col justify-center">技能</div>
        ),
        cell: ({ row }) => (
          <div className="w-full px-2 flex flex-col justify-center">
            {row.original.skill}
          </div>
        ),
      },
      {
        accessorKey: "modifier",
        header: "Modifier",
        cell: ({ row }) => <>{row.original.modifier}</>,
      },
      {
        accessorKey: "skillRatio",
        header: "伤害倍率",
        cell: ({ row }) => (
          <>
            {safeDecimalMultiplier([row.original.skillRatio, 100]).toFixed(2)}%
          </>
        ),
      },
      {
        accessorKey: "dmgCap",
        header: "伤害上限",
        cell: ({ row }) => (
          <div className="">
            <div className="">{numberWithCommas(row.original.dmgCap)}</div>
          </div>
        ),
      },
      {
        accessorKey: "classification",
        header: "类型",
        cell: ({ row }) => (
          <div className="flex gap-1">
            {/* No = Normal
                Ra = Ranged
                Ch = Charged
                Sk = Skill
                Sb = Skybound Art
                Li = Link Attack */}
            {row.original.classification.normal && (
              <SkillClassificationBadge abrv="No" full="Normal" />
            )}
            {row.original.classification.ranged && (
              <SkillClassificationBadge abrv="Ra" full="Ranged" />
            )}
            {row.original.classification.charged && (
              <SkillClassificationBadge abrv="Ch" full="Charged" />
            )}
            {row.original.classification.skill && (
              <SkillClassificationBadge abrv="Sk" full="Skill" />
            )}
            {row.original.classification.skyboundArt && (
              <SkillClassificationBadge abrv="Sb" full="SBA" />
            )}
            {row.original.classification.linkAttack && (
              <SkillClassificationBadge abrv="Li" full="Link Attack" />
            )}
            {row.original.classification.finisher && (
              <SkillClassificationBadge abrv="Fi" full="Combo Finisher" />
            )}
            {row.original.classification.flat && (
              <SkillClassificationBadge
                abrv="Fl"
                full="Flat Damage: unaffected by caps"
              />
            )}
            {row.original.classification.pet && (
              <SkillClassificationBadge abrv="Pe" full="Pet" />
            )}
            {row.original.classification.sp2 && (
              <SkillClassificationBadge abrv="S2" full="Vane Special" />
            )}
            {row.original.classification.special && (
              <SkillClassificationBadge abrv="Sp" full="Special" />
            )}
            {row.original.classification.oc && (
              <SkillClassificationBadge abrv="Oc" full="Only Crit" />
            )}
            {row.original.classification.throw && (
              <SkillClassificationBadge abrv="Th" full="Throw" />
            )}
          </div>
        ),
      },
      {
        accessorKey: "multi",
        header: "倍率",
        cell: ({ row }) => (
          <div>
            {safeDecimalMultiplier([row.original.multi, 100]).toFixed(2)}%
          </div>
        ),
      },
      {
        accessorKey: "critChance",
        header: "暴击率",
        cell: ({ row }) => (
          <div>
            {safeDecimalMultiplier([row.original.critChance, 100]).toFixed(2)}%
          </div>
        ),
      },
      {
        accessorKey: "totalDamageCap",
        header: "总伤害上限",
        cell: ({ row }) => (
          <div>{numberWithCommas(Math.round(row.original.totalDamageCap))}</div>
        ),
      },
      {
        accessorKey: "nonCrit",
        header: "伤害",
        cell: ({ row }) => (
          <div>{numberWithCommas(Math.round(row.original.nonCrit))}</div>
        ),
      },
      {
        accessorKey: "crit",
        header: "暴击伤害",
        cell: ({ row }) => (
          <div>{numberWithCommas(Math.round(row.original.crit))}</div>
        ),
      },
      {
        accessorKey: "damagePotential",
        header: "上限比例",
        cell: ({ row }) => (
          <DamagePotentialCell damagePotential={row.original.damagePotential} />
        ),
      },
      {
        accessorKey: "overcap",
        header: "溢出",
        cell: ({ row }) => <div>{row.original.overcap.toFixed(2)}%</div>,
      },
      {
        accessorKey: "supplemental",
        header: "追击",
        cell: ({ row }) => (
          <div>{numberWithCommas(row.original.supplemental)}</div>
        ),
      },
      {
        accessorKey: "averageTotalDmg",
        header: "评价总伤害",
        cell: ({ row }) => (
          <div>{numberWithCommas(row.original.averageTotalDmg)}</div>
        ),
      },
    ],
    meta: { colspan: 14 },
  },
  // {
  //   id: "runSpecific",
  //   header: "Run Specific",
  //   columns: [
  //     {
  //       id: "weight",
  //       header: "Weight",
  //       cell: () => <div>0</div>,
  //     },
  //   ],
  // },
];

const SkillClassificationBadge = ({
  abrv,
  full,
}: {
  abrv: string;
  full: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge variant="outline">{abrv}</Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-full">
        <p>{full}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export const DamagePotentialCell = ({
  damagePotential,
}: {
  damagePotential: number;
}) => {
  return (
    <div
      className={`h-full ${
        damagePotential === 100
          ? "bg-green-200"
          : damagePotential > 85
          ? "bg-lime-200"
          : damagePotential > 65
          ? "bg-yellow-200"
          : damagePotential > 50
          ? "bg-amber-200"
          : damagePotential > 35
          ? "bg-orange-200"
          : damagePotential > 20
          ? "bg-red-200"
          : "bg-rose-200"
      }`}
    >
      {damagePotential.toFixed(2)}%
    </div>
  );
};
