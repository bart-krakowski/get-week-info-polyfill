import { WeekInfo } from "./types"

declare global {
  namespace Intl {
    interface Locale {
      getWeekInfo(): WeekInfo;
      weekInfo?: WeekInfo;
    }
  }
}

export {};