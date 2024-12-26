import Collections from "./Collections/Collections";
import Limited from "./LimitedEdition/Limited";
import Service from "./service/service";
import SpringCollections from "./SpringCollections/SpringCollections";
import Summer from "./Summer/Summer";
import Trendy from "./TrendyProducts/Trendy";
import Tshirts from "./Tshirts/Tshirts";
import Uomo from "./Uomo/Uomo";

export default function Home() {
  return (
    <div>
      <Summer />
      <Collections />
      <Trendy />
      <SpringCollections
        initialDays={170}
        initialHours={15}
        initialMinutes={50}
        initialSeconds={59}
      />
      <Tshirts />
      <Limited />
      <Uomo />
      <Service />
    </div>
  );
}
