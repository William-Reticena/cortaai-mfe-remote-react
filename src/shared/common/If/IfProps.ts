export type IfProps = {
  condition: Item | Items | boolean;
  children: React.ReactNode;
};

type Items = string[] | number[] | boolean[] | React.ReactNode[] | object[];

type Item = string | number | boolean | React.ReactNode | object;
