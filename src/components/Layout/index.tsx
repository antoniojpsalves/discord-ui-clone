import { Grid } from './styles';
import ServerList from '../ServerList';

// export default function() {
//     return (
//         <h1>Hello World.</h1>
//     );
// }

const Layout: React.FC = () => {
    return(
        <Grid>
            <ServerList />
        </Grid>
    )
};


export default Layout;