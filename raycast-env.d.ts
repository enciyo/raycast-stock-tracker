/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Language - Select application language */
  "language": "tr" | "en",
  /** 1st Column - Select column to display in first position */
  "column1": "none" | "price" | "change" | "changeAbs" | "volume" | "exchange" | "market",
  /** 2nd Column - Select column to display in second position */
  "column2": "none" | "price" | "change" | "changeAbs" | "volume" | "exchange" | "market",
  /** 3rd Column - Select column to display in third position */
  "column3": "none" | "price" | "change" | "changeAbs" | "volume" | "exchange" | "market"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-stocks` command */
  export type SearchStocks = ExtensionPreferences & {}
  /** Preferences accessible in the `watchlist` command */
  export type Watchlist = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-stocks` command */
  export type SearchStocks = {}
  /** Arguments passed to the `watchlist` command */
  export type Watchlist = {}
}

