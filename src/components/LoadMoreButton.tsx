interface Props {
  onLoadMore: () => void;
}
function LoadMoreButton({ onLoadMore }: Props) {
  return (
    <button
      onClick={onLoadMore}
      className="bg-gray-100 w-full uppercase p-2 text-base font-semibold leading-4 tracking-normal text-gray-600"
    >
      Load More
    </button>
  );
}

export default LoadMoreButton;
