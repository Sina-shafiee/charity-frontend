import type { useI18n } from "@/locale/client";

export type TranslateFunc = Awaited<ReturnType<typeof useI18n>>;
