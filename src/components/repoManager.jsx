import { useEffect, useState, useMemo } from 'react';
import './repoManager.css';

function RepoManager() {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://gitreposcraper-sebas-cc.netlify.app/sebas-cc');
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.description || 'Error al cargar los repositorios');
        }
        
        const data = await response.json();
        setRepos(data);
        
        // Extraer lenguajes únicos y no vacíos
        const uniqueLanguages = [...new Set(
          data
            .filter(repo => repo.programmingLanguage && repo.programmingLanguage !== '')
            .map(repo => repo.programmingLanguage)
        )];
        
        setLanguages(uniqueLanguages);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Filtrar los repositorios usando useMemo para evitar recálculos innecesarios
  const filteredRepos = useMemo(() => {
    return repos
      .filter(repo => {
        const searchLower = search.toLowerCase();
        return searchLower === '' || repo.title.toLowerCase().includes(searchLower);
      })
      .filter(repo => {
        return selectedLanguage === '' || repo.programmingLanguage === selectedLanguage;
      });
  }, [repos, search, selectedLanguage]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="repo-container">
      <nav className="repo-nav">
        <h2>PROJECTS</h2>
        
        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="languages">Programming language: </label>
            <select 
              id="languages" 
              name="languages" 
              value={selectedLanguage}
              onChange={handleLanguageChange}
              aria-label="Filter by programming language"
            >
              <option value="">All languages</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="search">Search:</label>
            <input 
              id="search" 
              type="search" 
              value={search}
              onChange={handleSearchChange}
              aria-label="Search repositories"
              placeholder="Search by title"
            />
          </div>
        </div>
      </nav>
      
      {isLoading ? (
        <div className="loading">Loading repositories...</div>
      ) : (
        <div className="repo-grid">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => (
              <article key={`repo-${index}`} className="repo-card">
                <h3>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.title}
                  </a>
                </h3>
                <p className="repo-description">{repo.description || 'No description available'}</p>
                {repo.programmingLanguage && (
                  <span className="language-tag">{repo.programmingLanguage}</span>
                )}
              </article>
            ))
          ) : (
            <p className="no-results">No repositories found matching your criteria.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RepoManager;