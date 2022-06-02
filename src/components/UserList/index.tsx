import { Container, Role, User, Avatar } from './styles';


interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot': ''}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return(
        <Container>
            <Role>KING - 2</Role>
            <UserRow nickname="$yn'" />
            <UserRow nickname="Marcola" />
            <Role>KNIGHT - 2</Role>
            <UserRow nickname="Nagini'" />
            <UserRow nickname="Code'" />
            <Role>Disponível - 1</Role>
            <UserRow nickname="ArromBOT2.0" isBot/>
            <Role>Offline - 18</Role>
            <UserRow nickname="Raycon'" />
            <UserRow nickname="Feups" />
            <UserRow nickname="HoruSama" />
            <UserRow nickname="Dreavus" />
            <UserRow nickname="Vieira'" />
            <UserRow nickname="Wes" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
        </Container>
    )
};


export default UserList;