import { Meter, MeterLabel, MeterValue } from "@/components/base/meter";

export function ExampleMeter() {
  return (
    <Meter value={40}>
      <MeterLabel>Progress</MeterLabel>
      <MeterValue />
    </Meter>
  );
}
