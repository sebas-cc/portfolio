import './App.css';
import RepoManager from './components/repoManager';

function App() {
  return (
    <>
      <div id="main">
        <div id="card">
          <img src="https://avatars.githubusercontent.com/u/62313488?v=4" alt="sebas-cc profile_picture" width="150vw"/>
          <ul id="contact_list">
            <li><a href="https://github.com/sebas-cc" target="_blank" rel='noreferrer'><img src="https://skillicons.dev/icons?i=github" alt='github' width="75vw"/></a></li>
            <li><a href="https://www.linkedin.com/in/sebastian-camacho-71a862239" target="_blank" rel='noreferrer'><img src="https://skillicons.dev/icons?i=linkedin" alt='linkedin' width="75vw"/></a></li>
          </ul>
        </div>
        <div id="bio">
          <h1>Sebastian Camacho</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem nibh, rhoncus eget pellentesque mollis, tincidunt nec libero. Integer in turpis et leo ultrices malesuada. Cras tristique consectetur ante, sit amet fringilla mauris aliquam in. Nulla suscipit sapien eget eros fermentum, eu tincidunt nibh varius. Pellentesque eleifend auctor enim, nec dignissim est consequat eu. Quisque sollicitudin turpis viverra nulla viverra iaculis vel interdum libero. Etiam nisi augue, sollicitudin eget elit nec, consequat luctus eros.</p>
        </div>
      </div>
      <RepoManager/>
    </>
  );
}

export default App;
