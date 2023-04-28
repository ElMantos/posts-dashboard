import {FC} from 'react';
import styled from 'styled-components';

import {LegendProps, LegendItemProps} from './types';


const LegendItem = styled.div`
    border-radius: 100%;
    width: 5px;
    height: 5px;
`

const Legend: FC<LegendProps> = ({data, colors}) => {

}