import AutoCard from "@/common/AutoCard";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserAuctionsQuery } from "@/redux/api/apiSlice";
import DefButton from "@/common/DefButton";
import { removeAuctionCredit } from "@/redux/user/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const { data: auctions } = useGetUserAuctionsQuery(user.id);

  const handleRemoveCredit = async (car) => {
    dispatch(
      removeAuctionCredit({
        email: user.email,
        auctionId: car.AuctionId,
      })
    );
    location.reload();
  };

  return (
    <>
      <main className="mx-auto mt-20 min-h-[70vh] max-w-[1440px] ">
        {auctions ? (
          auctions.map((car, indx) => (
            <>
              <AutoCard car={car} key={car.model + "-" + indx} />
              <DefButton onClick={() => handleRemoveCredit(car)}>
                Salir
              </DefButton>
            </>
          ))
        ) : (
          <p>No hay subastas en las que estés participando</p>
        )}
      </main>
    </>
  );
}
