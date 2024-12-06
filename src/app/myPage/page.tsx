import { Footbar } from "../components/Footbar";
import { Topbar } from "../components/Topbar";
import Buy1Get1 from "./Buy1Get1.tsx/buy1get1";
import Categories from "./Categories/categories";

export default function myPage() {
  return (
    <div>
      <Topbar />
      <Categories />
      <Buy1Get1 />
      <Footbar />
    </div>
  );
}
