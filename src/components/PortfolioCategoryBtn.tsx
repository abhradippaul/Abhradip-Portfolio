type categoryProps = {
    category : string
    setCategory : Function
}

function PortfolioCategoryBtn({category, setCategory} : categoryProps) {
  const onClickBtn = (e: any) => {
    setCategory(e.target.innerText.toLowerCase());
  };
  return (
    <button
      onClick={onClickBtn}
      className="p-1 px-2 font-semibold text-lg rounded-md bg-white hover:bg-blue-800 hover:text-slate-200 m-4 dark:bg-slate-900 dark:hover:bg-blue-700 dark:text-white"
    >
      {category.toUpperCase()}
    </button>
  );
}

export default PortfolioCategoryBtn;
