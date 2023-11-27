import { useEffect } from 'react';
import './App.css';
import { gapi } from 'gapi-script';
import Login from './component/Login';
import Logout from './component/Logout';
import useDrivePicker from 'react-google-drive-picker';

const CLIENT_ID = "691247830540-6361hkkkf07ms8meubksdu4d73kijt1d.apps.googleusercontent.com";
const API_KEY = "AIzaSyBf_ErVqaEIHQ70UwFkwMO_4l7a4JvG0Og";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        scopes: SCOPES,
      }).then(() => {
        // The initialization is successful, you can now use the API.
        console.log('Google API client initialized successfully');
      }).catch((error) => {
        console.error('Error initializing Google API client:', error);
      });
    };

    gapi.load('client:auth2', start)
  }, []);

  // function createFile(tag) {
  //   // console.log("Hello world")
  //   var accessToken = gapi.auth.getToken().access_token;

  //   fetch('https://www.googleapis.com/auth/drive.file',
  //   {
  //     method: "POST",
  //     headers: new Headers({'Authorization':'Bearer' + accessToken}),
  //   }).then((res)=>{
  //     return res.json();
  //   }).then( function(val){
  //     console.log(val);
  //     console.log(val.documentId);
  //   });
  // }

  const readGoogleSheet = () => {
    fetch('https://sheetdb.io/api/v1/rq7dq5alyont5')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  const [openPicker, data, authResponse] = useDrivePicker()

  const handleOpenPicker = () => {
    openPicker({
      clientId: "691247830540-6361hkkkf07ms8meubksdu4d73kijt1d.apps.googleusercontent.com",
      developerKey: "AIzaSyBf_ErVqaEIHQ70UwFkwMO_4l7a4JvG0Og",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      origin: window.location.protocol + '//' + window.location.host,
    })
  }

  useEffect(() => {
    if (data && data.docs) {
      data.docs.map((i) => console.log(i))
    }
  }, [data])

  return (
    <div>
      <Login />
      <Logout />
      {/* <button onClick={() => createFile('TEST 1')}>Create TEST 1</button> */}
      <button onClick={() => readGoogleSheet()}>Read</button>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default App;
