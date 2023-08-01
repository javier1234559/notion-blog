export default interface Database {
  object: string;
  results: Result[];
  next_cursor?: any;
  has_more: boolean;
  type: string;
  page_or_database: Person;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover?: any;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: string;
}

export interface Properties {
  Slug: Slug;
  Image: Image;
  Status: Status2;
  Published: Published;
  Assign: Assign;
  Date: DateItem;
  Description: Slug;
  Tag: Tag;
  Link: LinkItem;
  Title: Title;
}

export interface Title {
  id: string;
  type: string;
  title: Richtext[];
}

export interface LinkItem {
  id: string;
  type: string;
  rich_text: RichtextItem[];
}

export interface RichtextItem {
  type: string;
  text: TextItem;
  annotations: Annotations;
  plain_text: string;
  href: string;
}

export interface TextItem {
  content: string;
  link: Link;
}

export interface Link {
  url: string;
}

export interface Tag {
  id: string;
  type: string;
  multi_select: any[];
}

export interface DateItem {
  id: string;
  type: string;
  date: Date;
}

export interface Date {
  start: string;
  end?: any;
  time_zone?: any;
}

export interface Assign {
  id: string;
  type: string;
  people: Person2[];
}

export interface Person2 {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: Person;
}

export interface Person {
}

export interface Published {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Status2 {
  id: string;
  type: string;
  status: Status;
}

export interface Status {
  id: string;
  name: string;
  color: string;
}

export interface Image {
  id: string;
  type: string;
  files: File2[];
}

export interface File2 {
  name: string;
  type: string;
  file: File;
}

export interface File {
  url: string;
  expiry_time: string;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: Richtext[];
}

export interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface Createdby {
  object: string;
  id: string;
}