import Collections from "./Collections/Collections";
import Service from "./service/service";
import SpringCollections from "./SpringCollections/SpringCollections";
import Summer from "./Summer/Summer";
import Tshirts from "./Tshirts/Tshirts";
import Uomo from "./Uomo/Uomo";

export default function Home() {
  return (
    <div>
      <Summer />
      <Collections />
      <SpringCollections
        initialDays={170}
        initialHours={15}
        initialMinutes={50}
        initialSeconds={59}
      />
      <Tshirts />
      <Uomo />
      <Service/>
    </div>
  );
}
