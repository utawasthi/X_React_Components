import React, { useState, useEffect, type ChangeEvent, type MouseEvent } from "react";
import Suggestions from "./Suggestions";
import { Search } from "lucide-react";

const SearchAutoComplete: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData = users.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    setShowDropDown(false);
    setSearchParams(event.currentTarget.innerText);
    setFilteredUsers([]);
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data: { users?: { firstName: string }[] } = await response.json();
      if (data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setError(null);
      }
    } catch (err: unknown) {
      const e = err as Error;
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading ..!! Please Wait ..</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className = 'h-screen text-white flex flex-col justify-center items-center'>
      <h2 className = 'text-4xl -mt-60 mb-20 tracking-wider text-violet-500 font-semibold'>Search Auto Complete</h2>
      <div className = 'flex items-center mt-20'>
        <input
          type = "text"
          placeholder = "Search User...."
          value = {searchParams}
          onChange = {handleChange}
          className = 'border border-gray-400 px-4 py-2 focus:outline-none rounded-l-xl'
        />
        <div className = 'border border-gray-400 px-4 py-2 cursor-pointer rounded-r-xl'>
          <Search className = '' />
        </div>
      </div>
      {showDropDown && (
        <Suggestions handleClick={handleClick} filteredUsers={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutoComplete;
