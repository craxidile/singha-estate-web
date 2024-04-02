import type MediumFormat from "~/models/types/_base/medium/medium-format";

export default interface Medium {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: {
      large: MediumFormat;
      medium: MediumFormat;
      small: MediumFormat;
      thumbnail: MediumFormat;
    },
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string | null;
    createdAt: string;
    updatedAt: string;
  };
}
