import type { ThemeConfig } from "./types";

export const theme = {
  "id": "pantry",
  "product": "Pantry Compass",
  "tagline": "Plan pantry turnover before good food becomes waste.",
  "itemLabel": "Pantry item",
  "dateLabel": "Use-by date",
  "effortLabel": "Minutes",
  "impactLabel": "Waste risk",
  "categories": [
    "Produce",
    "Dry goods",
    "Dairy",
    "Frozen",
    "Prepared"
  ],
  "seeds": [
    [
      "Spinach",
      "Produce",
      20,
      5
    ],
    [
      "Brown rice",
      "Dry goods",
      30,
      2
    ],
    [
      "Vegetable soup",
      "Prepared",
      45,
      4
    ]
  ]
} as const satisfies ThemeConfig;
