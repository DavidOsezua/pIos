import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Table = ({ children }: Props) => {
  return (
    <table>
      <thead>
        <tr></tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
