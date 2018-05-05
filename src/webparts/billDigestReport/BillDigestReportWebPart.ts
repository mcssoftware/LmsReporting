import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'BillDigestReportWebPartStrings';
import BillDigestReport from './components/BillDigestReport';
import { IBillDigestReportProps } from './components/IBillDigestReportProps';

export interface IBillDigestReportWebPartProps {
  description: string;
}

export default class BillDigestReportWebPart extends BaseClientSideWebPart<IBillDigestReportWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBillDigestReportProps > = React.createElement(
      BillDigestReport,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
