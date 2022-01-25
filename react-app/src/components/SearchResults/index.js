import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const resultsObj = useSelector(state => state.search)

  const results = Object.values(resultsObj)



  return (
    <>
      <h2 className="search-title">Search Results</h2>
      {results?.length === 0 &&
        <div className="error-container">
          <h2 className="error-msg">Sorry, We Couldn't Find Any Profiles Matching Your Description</h2>
        </div>
      }
      <div className="results-container">
        {results?.length > 0 &&
          results.map(result => (
            <div className="search-listing">
              <h2 className="search-prod-title">{result.name}</h2>
              <Link to={`/profiles/${result.id}`}><img src={result.imageUrl} className="search-img" alt='artist pic'/></Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SearchPage;
