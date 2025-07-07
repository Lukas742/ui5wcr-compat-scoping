"use client";

import "@ui5/webcomponents-compat/dist/TableGroupRow.js";
import { withWebComponent } from "../withWebComponents.js";
import type { HTMLAttributes, ReactNode } from "react";
import { getCompatCustomElementsScopingSuffix } from "@ui5/webcomponents-compat/dist/utils/CompatCustomElementsScope.js";

interface TableGroupRowAttributes {}

interface TableGroupRowDomRef
  extends Required<TableGroupRowAttributes>,
    HTMLElement {}

interface TableGroupRowPropTypes
  extends TableGroupRowAttributes,
    Omit<HTMLAttributes<HTMLElement>, "children"> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableGroupRow` component represents a group row in the `Table`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-compat__.
 * @deprecated Deprecated as of version 2.12.0, use `@ui5/webcomponents/dist/Table.js` instead.
 */
const TableGroupRow = withWebComponent<
  TableGroupRowPropTypes,
  TableGroupRowDomRef
>(
  "ui5-table-group-row",
  [],
  [],
  [],
  [],
  getCompatCustomElementsScopingSuffix(),
);

TableGroupRow.displayName = "TableGroupRow";

export { TableGroupRow };
export type { TableGroupRowDomRef, TableGroupRowPropTypes };
