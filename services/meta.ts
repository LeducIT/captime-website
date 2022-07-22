import {
  MetaPropertyCharset,
  MetaPropertyEquiv,
  MetaPropertyMicrodata,
  MetaPropertyName,
  MetaPropertyProperty,
} from "vue-meta/types/vue-meta";

export const createMeta = (
  title: string,
  description: string,
  image: string | null = null,
  author: string | null = null,
  audio: string | null = null
): (
  | MetaPropertyCharset
  | MetaPropertyEquiv
  | MetaPropertyName
  | MetaPropertyMicrodata
  | MetaPropertyProperty
)[] => {
  const base = [
    { hid: "title", name: "title", content: title },
    {
      hid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
  ];
  if (author) {
    base.push(
      { hid: "author", name: "author", content: author },
      { hid: "og:article:author", name: "og:article:author", content: author }
    );
  }
  if (image) {
    const image_unsecure = image.replace("https://", "http://");
    base.push(
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: title,
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/webp",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: image_unsecure,
      },
      {
        hid: "og:image:secure",
        property: "og:image:secure",
        content: image,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: image,
      },
      { hid: "og:image:width", property: "og:image:width", content: "1200" },
      { hid: "og:image:height", property: "og:image:height", content: "627" }
    );
  }
  if (audio) {
    base.push(
      { hid: "og:audio", property: "og:audio", content: audio },
      {
        hid: "og:audio:type",
        property: "og:audio:type",
        content: "audio/mpeg",
      }
    );
  }
  return base;
};
