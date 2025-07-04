'use client';

import '@ui5/webcomponents-compat/dist/TableCell.js';
import { withWebComponent } from '../withWebComponents.js'
import type { HTMLAttributes, ReactNode } from 'react';

interface TableCellAttributes {}

interface TableCellDomRef extends Required<TableCellAttributes>, HTMLAttributes<HTMLElement> {}

interface TableCellPropTypes extends TableCellAttributes, Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /**
   * Specifies the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @deprecated Deprecated as of version 2.12.0, use `@ui5/webcomponents/dist/TableCell.js` instead.
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>('ui5-table-cell', [], [], [], []);

TableCell.displayName = 'TableCell';

export { TableCell };
export type { TableCellDomRef, TableCellPropTypes };
