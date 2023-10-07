import { setSearchField } from "../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const SearchBox: React.FC = () => {
    const searchField = useAppSelector(state => state.search.searchField)
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-center">
            <input
                type="search"
                name="name"
                className="block w-full rounded-md border-0 mb-4 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ "width": "15rem" }}
                placeholder="Search Robots..."
                value={searchField}
                onChange={(e) => dispatch(setSearchField(e.target.value))}
            />
        </div>
    );
}

export default SearchBox;