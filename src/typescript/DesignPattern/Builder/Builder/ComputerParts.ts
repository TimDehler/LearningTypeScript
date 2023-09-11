export enum computertypes {
  CUSTOM = "CUSTOM COMPUTER",
  GAMINGPC = "GAMING COMPUTER",
  OFFICEPC = "OFFICE COMPUTER",
  LAPTOP = "LAPTOP",
}

export enum cpus {
  INTEL = "INTEL",
  AMD = "AMD",
}

export enum mainboards {
  GIGABYTE = "GIGABYTE",
  ASUS = "ASUS",
  MSI = "MSI",
}

export enum rams {
  "16GB" = "16 GB",
  "8GB" = "8 GB",
  "4GB" = "4 GB",
}

export enum gpus {
  GFORCE = "GFORCE EXPERIENCE",
  AMD = "AMD",
  INTEL = "INTEL",
}

export enum powersupplys {
  "1200WATT" = "1200 WATT",
  "800WATT" = "800 WATT",
  "600WATT" = "600 WATT",
}

export enum memoryTypes {
  SSD = "SSD",
  HDD = "HDD",
}

export enum memorySizes {
  "1TB" = "1 Terrabyte",
  "800GB" = "800 Gigabyte",
  "500GB" = "500 Gigabyte",
}

export const computerParts = {
  computertypes: computertypes,
  mainboards: mainboards,
  cpus: cpus,
  rams: rams,
  gpus: gpus,
  powersupplys: powersupplys,
  memoryTypes: memoryTypes,
  memorySizes: memorySizes,
};
