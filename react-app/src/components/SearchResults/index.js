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
          <h2 className="error-msg">Sorry, We Couldn't Find Any Items Matching Your Description</h2>
          <img src="https://us.123rf.com/450wm/arcady31/arcady311705/arcady31170500048/77956942-sorry-vector-sign.jpg?ver=6" alt="sorry emoji" className="error-img" />
        </div>
      }
      <div className="results-container">
        {results?.length > 0 &&
          results.map(result => (
            <div className="search-listing">
              <h2 className="search-prod-title">{result.name}</h2>
              <Link to={`/profiles/${result.id}`}><img src={result.imageUrl} className="search-img"/></Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SearchPage;
