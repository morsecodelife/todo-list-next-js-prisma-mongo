// src/lib/dayjs.ts
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

// ปรับ locale ภาษาอังกฤษแบบสั้น
dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s later",
    past: "%s ago",
    s: "a few sec",
    m: "1 min",
    mm: "%d min",
    h: "1 hr",
    hh: "%d hr",
    d: "1 day",
    dd: "%d days",
    M: "1 mo",
    MM: "%d mo",
    y: "1 yr",
    yy: "%d yr",
  },
});

dayjs.locale("en");

export default dayjs;
