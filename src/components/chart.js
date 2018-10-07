import _ from 'lodash';
import React from 'react';

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
  return _.round(_.sum(data) / data.length);
};

const Chart = props => {
  return (
    <div>
      <Sparklines data={props.data} height={50}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>

      <div className="average">
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};

export default Chart;
