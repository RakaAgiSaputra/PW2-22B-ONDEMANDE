import ButtonCreateWistList from "./_component/ButtonCreateWistList";
import { TableWishList } from "./_component/TabelWishList";

export default function WishListPage(){
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