import * as React from 'react';

import { Shimmer, ShimmerElementsGroup, ShimmerElementType as ElemType } from 'office-ui-fabric-react/lib/Shimmer';

import * as ShimmerExampleStyles from './Shimmer.Example.scss';

export class ShimmerCustomElementsExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className={ShimmerExampleStyles.shimmerExampleContainer}>
        Using ShimmerElementsGroup component to build complex structures of the placeholder you need.
        <Shimmer customElementsGroup={this._getCustomElementsExampleOne()} width={350} />
        <Shimmer customElementsGroup={this._getCustomElementsExampleTwo()} width={550} />
        <Shimmer customElementsGroup={this._getCustomElementsExampleThree()} width={'90%'} />
      </div>
    );
  }

  private _getCustomElementsExampleOne = (): JSX.Element => {
    return (
      <div
        // tslint:disable-next-line:jsx-ban-props
        style={{ display: 'flex' }}
      >
        <ShimmerElementsGroup
          shimmerElements={[
            { type: ElemType.line, width: 40, height: 40 },
            { type: ElemType.gap, width: 10, height: 40 }
          ]}
        />
        <ShimmerElementsGroup
          flexWrap={true}
          shimmerElements={[
            { type: ElemType.line, width: 300, height: 10 },
            { type: ElemType.line, width: 200, height: 10 },
            { type: ElemType.gap, width: 100, height: 20 }
          ]}
        />
      </div>
    );
  };

  private _getCustomElementsExampleTwo = (): JSX.Element => {
    return (
      <div
        // tslint:disable-next-line:jsx-ban-props
        style={{ display: 'flex' }}
      >
        <ShimmerElementsGroup
          shimmerElements={[{ type: ElemType.circle, height: 40 }, { type: ElemType.gap, width: 10, height: 40 }]}
        />
        <ShimmerElementsGroup
          flexWrap={true}
          shimmerElements={[
            { type: ElemType.line, width: 400, height: 10 },
            { type: ElemType.gap, width: 100, height: 20 },
            { type: ElemType.line, width: 500, height: 10 }
          ]}
        />
      </div>
    );
  };

  private _getCustomElementsExampleThree = (): JSX.Element => {
    return (
      <div
        // tslint:disable-next-line:jsx-ban-props
        style={{ display: 'flex' }}
      >
        <ShimmerElementsGroup
          width={'90px'}
          shimmerElements={[
            { type: ElemType.line, height: 80, width: 80 },
            { type: ElemType.gap, width: 10, height: 80 }
          ]}
        />
        <div
          // tslint:disable-next-line:jsx-ban-props
          style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}
        >
          <ShimmerElementsGroup
            shimmerElements={[{ type: ElemType.circle, height: 40 }, { type: ElemType.gap, width: 10, height: 40 }]}
          />
          <ShimmerElementsGroup
            flexWrap={true}
            width={'calc(100% - 50px)'}
            shimmerElements={[
              { type: ElemType.line, width: '90%', height: 10 },
              { type: ElemType.gap, width: '10%', height: 20 },
              { type: ElemType.line, width: '100%', height: 10 }
            ]}
          />
          <ShimmerElementsGroup
            flexWrap={true}
            width={'100%'}
            shimmerElements={[
              { type: ElemType.line, width: '80%', height: 10, verticalAlign: 'bottom' },
              { type: ElemType.gap, width: '20%', height: 20 },
              { type: ElemType.line, width: '40%', height: 10, verticalAlign: 'bottom' },
              { type: ElemType.gap, width: '2%', height: 20 },
              { type: ElemType.line, width: '58%', height: 10, verticalAlign: 'bottom' }
            ]}
          />
        </div>
      </div>
    );
  };
}
