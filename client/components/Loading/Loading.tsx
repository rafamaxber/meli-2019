import * as Common from '../Common/main.styled';
import * as Styled from './style';
import Icon from '../../public/img/spinner.gif';

const Loading = () => (
  <Common.Limit>
    <Styled.Loading>
      <Styled.LoadingIcon
        src={Icon}
        title="Carregando..."
        alt="Carregando..."
      />
    </Styled.Loading>
  </Common.Limit>
)

export default Loading
