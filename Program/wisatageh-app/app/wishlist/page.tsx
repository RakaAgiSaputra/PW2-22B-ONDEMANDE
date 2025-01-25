import ButtonCreateWistList from "./_component/ButtonCreateWistList";
import { TableWishList } from "./_component/TabelWishList";

export default function WishListPage(){
    const batas = "px-20 pt-5 pb-5";
    return (
      <>
        <div className="flex justify-start w-full mt-10 px-20">
          <ButtonCreateWistList />
        </div>
        <div className=" mt-10 px-20">
          <TableWishList />
        </div>
      </>
    );
}