import { WeekInfo } from "./types"

declare namespace Intl {
  interface Locale {
    getWeekInfo: () => WeekInfo
    weekInfo?: WeekInfo
  }
}