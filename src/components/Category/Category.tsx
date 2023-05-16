import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import type { CategoryProps } from '../../../types/types';

const Category: React.FC<CategoryProps> = ({ category }) => {
  const [showTeams, setShowTeams] = useState(false);
  const navigate = useNavigate();

  const { name, teams } = category

  const handleClick = () => {
    navigate(`/?category=${encodeURIComponent(name)}`);
    setShowTeams(!showTeams);
  };

  useEffect(() => {
    const location = window.location;
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("category");

    if (selectedCategory === name) {
      setShowTeams(true);
    }
  }, [name]);

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
      {showTeams && (
        <div>
          {teams.map((team) => (
            <div key={team.id}>
              <Link
                to={`/?category=${encodeURIComponent(
                  name
                )}&sub-category=${encodeURIComponent(team.name)}`}
              >
                {team.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category