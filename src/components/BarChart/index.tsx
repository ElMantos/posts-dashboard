import { FC, useMemo } from "react";
import styled from "styled-components";

import { ChartItemProps, BarChartProps } from "./types";
import Legend from "./Legend";

const Container = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
`;

const ChartItem = styled.div`
  height: 100%;
  background-color: ${({ $color }: ChartItemProps) => $color};
  width: ${({ $width }: ChartItemProps) => $width};
`;

const defaultColors = ["#32a852", "#a8a432", "#32a896", "#a83248", "#5da832"];

const getWithInPercent = (partial: number, total: number) =>
  (partial / total) * 100;

const BarChart: FC<BarChartProps> = ({ data, colors = defaultColors }) => {
  const totalAmount = useMemo(
    () => data.reduce((acc, { value }) => acc + value, 0),
    []
  );
  if (data.length < colors.length) {
    throw new Error("<BarChart />: data list cannot be longer than color list");
  }
  return (
    <>
      <Container>
        {data.map(({ value }, index) => (
          <ChartItem
            key={index}
            $color={colors[index]}
            $width={`${getWithInPercent(value, totalAmount)}%`}
          />
        ))}
      </Container>
      <Legend colors={colors} data={data} />
    </>
  );
};

export default BarChart;
