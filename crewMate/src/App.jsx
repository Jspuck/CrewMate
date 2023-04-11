import './App.css'

import CreatePost from './routes/CreatePost'
import {createClient} from '@supabase/supabase-js'
import SideNav from './components/sideNav'


const supaURL = 'https://jqhmzsnllfqrqvlzgvti.supabase.co'
const supaAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxaG16c25sbGZxcnF2bHpndnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODU4NDIsImV4cCI6MTk5Njc2MTg0Mn0.sJ4JB3NO0Thk1zblgVzPTz6y3ioIxJkCBKE0dXg72hg'

function App() {
  const supabase = createClient(supaURL,supaAPI)

  return (
   <div className='create-CrewMates'>
    <SideNav/>
    <h1 className='title'> WELCOME TO AMONG US CREW MATES</h1>
   </div>
  )
}

export default App
