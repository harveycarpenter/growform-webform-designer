const Login = ({ onLogin }) => {

  const iframeUrl = import.meta.env.VITE_APP_URL + "?embeddedAsApp=webflow";

  window.addEventListener("message", (event) => {

    if (event.data.type == "growformAppToWebflow" && event.data.jwt) {
      onLogin(event.data.jwt)
    }
    
  }, false);

  return (
    <div>
     <iframe src={iframeUrl} style={{width: '100%', height: '100vh', border: 'none'}}></iframe>
    </div>
  );
};

export default Login;
