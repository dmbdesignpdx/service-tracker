import { atomWithReset } from "jotai/utils";

import { HOUR } from "@/constants/main";

export const diffAtom = atomWithReset(HOUR);
