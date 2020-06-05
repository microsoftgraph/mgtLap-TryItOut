declare interface IHelloMgtWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloMgtWebPartStrings' {
  const strings: IHelloMgtWebPartStrings;
  export = strings;
}
