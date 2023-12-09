import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCarouselBlock extends Schema.Component {
  collectionName: 'components_blocks_carousel_blocks';
  info: {
    displayName: 'CarouselBlock';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'content.title'> & Attribute.Required;
    events: Attribute.Component<'content.event', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    menu_link: Attribute.Component<'navigation.menu-link'>;
  };
}

export interface BlocksContactBlock extends Schema.Component {
  collectionName: 'components_blocks_contact_blocks';
  info: {
    displayName: 'ContactBlock';
    icon: 'cube';
  };
  attributes: {
    menu_link: Attribute.Component<'navigation.menu-link'>;
    title: Attribute.Component<'content.title'> & Attribute.Required;
    contacts: Attribute.Component<'content.contact', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 2;
      }>;
  };
}

export interface BlocksEnumBlock extends Schema.Component {
  collectionName: 'components_blocks_enum_blocks';
  info: {
    displayName: 'EnumBlock';
    icon: 'cube';
    description: '';
  };
  attributes: {
    menu_link: Attribute.Component<'navigation.menu-link'>;
    phrases: Attribute.Component<'content.phrase', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }>;
    title: Attribute.Component<'content.title'> & Attribute.Required;
  };
}

export interface BlocksJoinBlock extends Schema.Component {
  collectionName: 'components_blocks_join_blocks';
  info: {
    displayName: 'JoinBlock';
    icon: 'cube';
    description: '';
  };
  attributes: {
    menu_link: Attribute.Component<'navigation.menu-link'>;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text;
    title_case: Attribute.String & Attribute.Required;
    text_case: Attribute.Text;
    title_team: Attribute.String & Attribute.Required;
    text_team: Attribute.Text;
    case_link: Attribute.Component<'navigation.link'>;
    team_link: Attribute.Component<'navigation.link'>;
  };
}

export interface BlocksPageBlock extends Schema.Component {
  collectionName: 'components_blocks_page_blocks';
  info: {
    displayName: 'PageBlock';
    icon: 'cube';
    description: '';
  };
  attributes: {
    kind: Attribute.Enumeration<['news']> & Attribute.Required;
    menu_link: Attribute.Component<'navigation.menu-link'> & Attribute.Required;
  };
}

export interface BlocksPriceBlock extends Schema.Component {
  collectionName: 'components_blocks_price_blocks';
  info: {
    displayName: 'PriceBlock';
    icon: 'cube';
    description: '';
  };
  attributes: {
    menu_link: Attribute.Component<'navigation.menu-link'>;
    prices: Attribute.Component<'content.price', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 3;
      }>;
    title: Attribute.Component<'content.title'> & Attribute.Required;
  };
}

export interface BlocksSplitBlock extends Schema.Component {
  collectionName: 'components_blocks_split_blocks';
  info: {
    displayName: 'SplitBlock';
    description: '';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text;
    photo: Attribute.Media & Attribute.Required;
    menu_link: Attribute.Component<'navigation.menu-link'>;
    link: Attribute.Component<'navigation.link'>;
  };
}

export interface BlocksTextBlock extends Schema.Component {
  collectionName: 'components_blocks_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'content.title'> & Attribute.Required;
    text: Attribute.Text;
    links: Attribute.Component<'navigation.link', true>;
    menu_link: Attribute.Component<'navigation.menu-link'>;
  };
}

export interface ContentContact extends Schema.Component {
  collectionName: 'components_content_contacts';
  info: {
    displayName: 'contact';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    title: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
    photo: Attribute.Media & Attribute.Required;
  };
}

export interface ContentEvent extends Schema.Component {
  collectionName: 'components_content_events';
  info: {
    displayName: 'event';
  };
  attributes: {
    title: Attribute.String;
    bold_title: Attribute.String & Attribute.Required;
    date_title: Attribute.String;
    photo: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPhrase extends Schema.Component {
  collectionName: 'components_content_phrases';
  info: {
    displayName: 'Phrase';
    icon: 'file';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ContentPrice extends Schema.Component {
  collectionName: 'components_content_prices';
  info: {
    displayName: 'price';
    icon: 'file';
    description: '';
  };
  attributes: {
    price: Attribute.String & Attribute.Required;
    legend: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ContentTitle extends Schema.Component {
  collectionName: 'components_content_titles';
  info: {
    displayName: 'title';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sub_title: Attribute.String;
  };
}

export interface NavigationLink extends Schema.Component {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.Required &
      Attribute.DefaultTo<'_blank'>;
  };
}

export interface NavigationMenuLink extends Schema.Component {
  collectionName: 'components_navigation_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
  };
}

export interface NavigationSeo extends Schema.Component {
  collectionName: 'components_navigation_seos';
  info: {
    displayName: 'Seo';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.carousel-block': BlocksCarouselBlock;
      'blocks.contact-block': BlocksContactBlock;
      'blocks.enum-block': BlocksEnumBlock;
      'blocks.join-block': BlocksJoinBlock;
      'blocks.page-block': BlocksPageBlock;
      'blocks.price-block': BlocksPriceBlock;
      'blocks.split-block': BlocksSplitBlock;
      'blocks.text-block': BlocksTextBlock;
      'content.contact': ContentContact;
      'content.event': ContentEvent;
      'content.phrase': ContentPhrase;
      'content.price': ContentPrice;
      'content.title': ContentTitle;
      'navigation.link': NavigationLink;
      'navigation.menu-link': NavigationMenuLink;
      'navigation.seo': NavigationSeo;
    }
  }
}
