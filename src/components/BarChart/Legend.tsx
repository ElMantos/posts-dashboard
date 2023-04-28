import { FC } from "react";
import styled from "styled-components";

import { LegendProps, LegendItemProps } from "./types";

const LegendContainer = styled.div`
    display: flex;
    margin-top: 16px;
    @media (max-width: 768px){
        flex-direction: column;
        .bar_chart-item-container {
            margin-bottom: 16px;
        }
    }
`;

const LegendItemContainer = styled.div`
    margin-right: 16px;
    display: flex;
    align-items: center;
`;
 

const LegendItem = styled.div`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: ${({ $color }: LegendItemProps) => $color};
  margin-right: 9px;
`;

const Legend: FC<LegendProps> = ({ data, colors }) => (
  <LegendContainer>
    {data.map(({ label, value }, index) => (
      <LegendItemContainer key={index} className="bar_chart-item-container"><LegendItem key={value} $color={colors[index]} /> {label}</LegendItemContainer>
    ))}
  </LegendContainer>
);


export default Legend;