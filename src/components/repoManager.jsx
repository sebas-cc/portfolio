import './repoManager.css';
import { useEffect, useState } from 'react';


function RepoManager(){
    const [languages, setLanguages] = useState([])
    const [reposList, setReposList] = useState([])
    const [search, setSearch] = useState('')
    const [selection, setSelection] = useState('')

    const getData = async() => {
        try{
            const res = await fetch('https://gitreposcraper-sebas-cc.netlify.app/sebas-cc')
            const data = await res.json()
            if (!res.ok){
                console.log(data.description)
                return
            }
            setReposList(data)
            const removedInconsistentData = data.filter((repo, index) => {
                return index === data.findIndex(object => {
                    return (repo.programmingLanguage === object.programmingLanguage) && (repo.programmingLanguage !== '')
                })
            })
            setLanguages(removedInconsistentData.map(repo => {
                return repo.programmingLanguage
            }))
        }catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <nav>
                <h1>PROJECTS</h1><br/>
                <div>
                    <label htmlFor="languages">Programming language: </label>
                    <select id="languages" name="languages" onChange={(e) => setSelection(e.target.value)}>
                        <option key="none"></option>
                        {languages.map( language => <option key={language}>{language}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="search">Search:</label>
                    <input id="search" type="search" onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </nav>
            <table>
                {reposList.filter(repo => {
                    return search.toLowerCase() === '' ? repo : repo.title.toLowerCase().includes(search.toLocaleLowerCase())
                }).filter(repo => {
                    return selection === '' ? repo : repo.programmingLanguage === selection
                }).map((repo, index) => (
                    <tr id={index}>
                        <td>
                            <a href={repo.url} target='blank'>{repo.title}</a>
                            <p>{repo.description}</p><br/>
                            <i>{repo.programmingLanguage}</i>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default RepoManager;