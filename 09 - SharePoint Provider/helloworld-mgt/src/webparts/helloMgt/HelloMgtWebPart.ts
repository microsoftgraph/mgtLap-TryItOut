import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloMgtWebPart.module.scss';
import * as strings from 'HelloMgtWebPartStrings';

import { Providers, SharePointProvider } from '@microsoft/mgt';

export interface IHelloMgtWebPartProps {
  description: string;
}

export default class HelloMgtWebPart extends BaseClientSideWebPart <IHelloMgtWebPartProps> {

  protected async onInit() {
    Providers.globalProvider = new SharePointProvider(this.context);
  }

  public render(): void {
    this.domElement.innerHTML = `
      <mgt-person person-query="me" show-name show-email></mgt-person>
      <mgt-agenda></mgt-agenda>
      `;
  }


  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
