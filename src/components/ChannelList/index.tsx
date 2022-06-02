import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ServerName: React.FC = () => {
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="quests"/>
            <ChannelButton channelName="comands"/>
            <ChannelButton channelName="quests"/>
            <Category>
                <span>Canais de voz</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="Conselho Real"/>
            <ChannelButton channelName="Papo de Buteco"/>
            <ChannelButton channelName="Lol"/>
            <ChannelButton channelName="Valorant"/>
            <ChannelButton channelName="Don't Starve"/>
            <ChannelButton channelName="Minecraft"/>
        </Container>
    )
};


export default ServerName;