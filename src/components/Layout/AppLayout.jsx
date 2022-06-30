import React from "react"
// import { useSelector, Provider } from 'react-redux'
import "../../css/typography.css"
// import store from "../redux/reducers/store"
import 'antd/dist/antd.css';
import { Auth0Provider } from "@auth0/auth0-react";

const AppLayout = ({ children }) => {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <Auth0Provider
        domain="dev-t0oafn59.eu.auth0.com"
        clientId="ObgZAmxYvZt08Wirw5Pst2UU7m5JiaFp"
        audience="http://localhost:8000/dashboard"
        scope="read:current_user update:current_user_metadata read:users read:access_token "
        redirectUri={'http://localhost:8000'}
      >
        <main>
          {children}
        </main>
      </Auth0Provider>
    </>
  )
}

const SoraLayout = (props) => {
  return <AppLayout {...props} />
  // <Provider store={store}>
  // </Provider>
}

export default SoraLayout