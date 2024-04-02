import type Medium from "~/models/types/_base/medium";

export default interface Media {
  id: number;
  cover: {
    data: Medium;
  } | null,
  banner: {
    data: Medium;
  } | null,
}
