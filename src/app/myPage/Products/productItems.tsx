interface Props {
  name: string;
  price: number;
  discount: string;
  pricecolor: string;
  oldprice: number;
}

export default function ProductItems({
  name,
  price,
  discount,
  pricecolor,
  oldprice,
}: Props) {
  return (
    <div className="relative xl:mr-6 lg:mr-6 md:mr-6 m-4">
      <div className="p-10 bg-gray-200 rounded-lg">
        <img src="/images/bag.png" alt="product" className="w-full" />
      </div>
      {discount && (
        <p className="bg-red-600 text-white absolute top-0 left-0 p-1 text-xs">
          {discount}
        </p>
      )}

      <div className="absolute top-1 right-1 p-1 bg-slate-800 rounded-full">
        <svg
          className="w-4 h-4 text-white hover:text-rose-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h3 className="text-md text-left my-1">{name}</h3>
      <h4 className={`font-semibold ${pricecolor}`}>{price}</h4>
      {oldprice && <del className="text-sm text-gray-700">{oldprice}</del>}
    </div>
  );
}
