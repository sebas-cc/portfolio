import './App.css';
import RepoManager from './components/repoManager';

function App() {
  return (
    <>
      <div id="main">
        <div id="card">
          <img src="https://media.licdn.com/dms/image/C4D03AQHiyWCncDOFFA/profile-displayphoto-shrink_400_400/0/1652410523882?e=1721260800&v=beta&t=Y0QE7XjlhwK-nDx0FyrpsS8yI7XYIJ0uyaibqTlqD3I" alt="sebas-cc profile_picture" width="200vw"/>
          <ul id="contact_list">
            <li><a href="https://github.com/sebas-cc" target="_blank" rel='noreferrer'><img src="https://skillicons.dev/icons?i=github" alt='github' width="75vw"/></a></li>
            <li><a href="https://www.linkedin.com/in/sebastian-camacho-71a862239" target="_blank" rel='noreferrer'><img src="https://skillicons.dev/icons?i=linkedin" alt='linkedin' width="75vw"/></a></li>
          </ul>
        </div>
        <div id="bio">
          <h1>Sebastian Camacho</h1><br/>
          <p>Hi everyone! I'm a software engineer who has knowledge in the field as a front-end and back-end developer and as a Salesforce administrator. I'm always open to new opportunities and learning new technologies to not only grow within my career but also my network. A quick chat may be the start of a new beginning, so don't hesitate to contact me.</p>
        </div>
      </div>
      <RepoManager/>
    </>
  );
}

export default App;
