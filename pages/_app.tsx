import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from 'react'
import Authorize from '../Components/Security/Authorize';
import Header from '../Components/Navigation/Header';
import SideLink from '../Components/Navigation/SideLink'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
function MyApp({ Component, pageProps }: AppProps<ISession>) {
  const [state, setState] = useState<SharedProps | undefined>();

  return(
    <Authorize sharedProps={state} setSharedProps={setState}> 
        <Header 
          topBar={
          <div>Hello</div>
          }
          sideLinks={
            <List>
                <ListItem button key={"Home"}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={""} />
                </ListItem>
            </List>
          }
          >
          <Component {...pageProps} sharedProps={state} setSharedProps={setState}/>
        </Header>
  
    </Authorize>
  )

   
}

export default MyApp
