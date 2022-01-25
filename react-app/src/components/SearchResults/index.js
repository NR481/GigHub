import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './SearchResults.css'

const SearchPage = () => {
  const resultsObj = useSelector(state => state.search)

  const results = Object.values(resultsObj)

  return (
    <div className="search-container">
      <h2 className="search-title">Search Results</h2>
      {results?.length === 0 &&
        <div className="error-container">
          <h2 className="error-msg">Sorry, We Couldn't Find Any Profiles Matching Your Description</h2>
        </div>
      }
      <div className="results-container">
        {results?.length > 0 &&
          results.map(result => (
            <div key={result.id} className="search-listing">
              <Link to={`/profiles/${result.id}`}><img src={result.imageUrl} className="search-img" alt='artist pic'/></Link>
              <div className="search-info">
                <p className="search-prod-title">{result.name}</p>
                <p className="search-description">{result.description}</p>
                <p>{result.category}</p>
                <p>{result.location}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SearchPage;
