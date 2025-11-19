import type { Attribute, Schema } from '@strapi/strapi';

export interface MediaMediaItem extends Schema.Component {
  collectionName: 'components_media_media_items';
  info: {
    displayName: 'MediaItem';
    icon: 'picture';
  };
  attributes: {
    description: Attribute.RichText;
    gallery: Attribute.Media<'images' | 'files', true>;
    postLink: Attribute.String;
    Thumbnail: Attribute.Media<'images' | 'files'>;
    title: Attribute.String;
    videoFile: Attribute.Media<'files' | 'videos'>;
    videoLink: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'media.media-item': MediaMediaItem;
    }
  }
}
