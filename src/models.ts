export interface WidthCheckerProps {
  children: (x: { display: boolean }) => React.ReactNode;
  wait: number;
  widthBelow: number;
  widthUp: number;
  ssr?: boolean;
}

export interface WidthCheckerState {
  display: boolean;
}
