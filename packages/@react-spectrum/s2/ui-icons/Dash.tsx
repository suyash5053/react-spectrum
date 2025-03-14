/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import Dash_L from './S2_DashSize200.svg';
import Dash_M from './S2_DashSize100.svg';
import Dash_S from './S2_DashSize75.svg';
import Dash_XL from './S2_DashSize300.svg';
import Dash_XS from './S2_DashSize50.svg';
import {ReactNode, SVGProps} from 'react';

export default function Dash(props: SVGProps<SVGSVGElement> & {size?: 'M' | 'L' | 'XL' | 'XS' | 'S'}): ReactNode {
  let {size = 'M', ...otherProps} = props;
  switch (size) {
    case 'M':
      return <Dash_M {...otherProps} />;
    case 'L':
      return <Dash_L {...otherProps} />;
    case 'XL':
      return <Dash_XL {...otherProps} />;
    case 'XS':
      return <Dash_XS {...otherProps} />;
    case 'S':
      return <Dash_S {...otherProps} />;
  }
}
