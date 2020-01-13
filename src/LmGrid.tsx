import * as React from "react";
import { IColumnProps } from "./LmColumn";

export type ILmGridProps = {
  data?: any[];
  children: React.ReactElement<IColumnProps>[];
};

export class LmGrid extends React.Component<ILmGridProps> {
  buildRow(columns: IColumnProps[], data?: any[]) {
    if (!data) {
      return null;
    }

    return data.map((row: any, rowIndex: number) => (
      <tr key={`_${rowIndex}`}>
        {columns.map((col: IColumnProps, colIndex: number) => (
          <td key={`${col.field}_${rowIndex}_${colIndex}`}>{row[col.field]}</td>
        ))}
      </tr>
    ));
  }

  render() {
    const { children, data } = this.props;
    const columns: IColumnProps[] = children.map(item => item.props);

    return (
      <table>
        <thead>
          <tr>
            {columns.map((col: IColumnProps) => (
              <th key={col.field}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>{this.buildRow(columns, data)}</tbody>
      </table>
    );
  }
}
