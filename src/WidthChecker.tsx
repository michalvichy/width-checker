import * as React from 'react';

import { debounce, inRange } from 'lodash';
import { canUseDOM } from './utils/canUseDom';

import { WidthCheckerProps, WidthCheckerState } from './models';

export class WidthChecker extends React.PureComponent<WidthCheckerProps, WidthCheckerState> {
  public static defaultProps: Pick<WidthCheckerProps, 'wait'> = { wait: 200 };

  private condition = (): boolean => {
    if (canUseDOM()) {
      const windowWidth = window.innerWidth;
      const { widthBelow, widthUp } = this.props;

      return inRange(windowWidth, widthUp, widthBelow);
    }

    return !!this.props.ssr;
  };

  private debounceRef: (() => void) | null = null;
  public state = { display: this.condition() };

  public componentDidMount() {
    this.debounceRef = debounce(this.handleResize, this.props.wait);

    if (canUseDOM()) {
      window.addEventListener('resize', this.debounceRef);
    }
  }

  public componentWillUnmount() {
    if (this.debounceRef && canUseDOM()) {
      window.removeEventListener('resize', this.debounceRef);
    }
  }

  private handleResize = () => {
    if (this.condition() && !this.state.display) {
      this.setState({ display: true });
    } else if (!this.condition() && this.state.display) {
      this.setState({ display: false });
    }
  };

  public render() {
    const { display } = this.state;

    return this.props.children({ display });
  }
}
